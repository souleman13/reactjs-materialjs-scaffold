import AWS from 'aws-sdk'
import { unmarshalItem } from 'dynamodb-marshaler'
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

var dynamoDb = new AWS.DynamoDB()

export const GetExploreData = () => {
    return dynamoDb.scan({ TableName: 'guesthouse.explore' }).promise()
        .then(response => response.Items.map(unmarshalItem))
}

var s3 = new AWS.S3()

export const GetGallery = () => {
    var images = []
    const bucket = 'guesthouse-gallery'
    return s3.listObjects({Bucket: bucket}, function (err, data) {
        if (err) throw(err)
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
    }).promise().then(r=>images)
}