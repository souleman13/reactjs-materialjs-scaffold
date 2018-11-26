import AWS from 'aws-sdk'
import { aws_cred } from './credential'

AWS.config.update({
    accessKeyId: aws_cred.accessKeyId,
    secretAccessKey: aws_cred.secretAccessKey,
    "region": "us-east-1",
    apiVersions: {
        dynamodb: '2012-08-10',
        s3: '2006-03-01',
        //other service APIs
    }
})

var s3 = new AWS.S3()

export const GetGallery = () => {
    var images = []
    const bucket = 'guesthouse-gallery'
    return s3.listObjects({Bucket: bucket}, function (err, data) {
        var bucketContents = data.Contents
        for (var i = 0; i < bucketContents.length; i++) {
            var urlParams = { Bucket: bucket, Key: bucketContents[i].Key }
            s3.getSignedUrl('getObject', urlParams, function (err, url) {
                images.push({
                    original: url,
                    thumbnail: url,
                })
            })
        }
    })
}