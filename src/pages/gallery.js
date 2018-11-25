import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Paper, Button } from '@material-ui/core/'
import ImageGallery from 'react-image-gallery'
import BackIcon from '@material-ui/icons/BackspaceOutlined'
import "react-image-gallery/styles/css/image-gallery.css"

const styles = theme => ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    nav: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        marginTop: 10,

    },
    gallery: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 50px 50px 50px',
        padding: 30,
        width: '70%',
        minWidth:300,
        '& .image-gallery-slide $img': {
            width: '100%',
            height: '100%',
        }
    },
    backIcon: {
        paddingRight: 5,
    },
})

class Gallery extends React.Component {
    render() {
        const { classes } = this.props
        const images = [
            {
                original: 'https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg',
                thumbnail: 'https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg',
            },
            {
                original: 'https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg',
                thumbnail: 'https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg'
            },
            {
                original: 'https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg',
                thumbnail: 'https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg'
            }
        ]
        return (
            <div className={classes.root}>
                <div className={classes.nav}>
                    <Button variant='text' href='/' color="primary">
                        <BackIcon className={classes.backIcon} color="primary" />
                        <Typography variant="h6" color='primary'>
                            Back
                        </Typography>
                    </Button>
                    <Typography variant="h3">
                        Stay With Soule ~ Guesthouse ~ Gallery
                    </Typography>
                    <Paper className={classes.gallery} elevation={7}>
                        <ImageGallery items={images} />
                    </Paper>
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallery)