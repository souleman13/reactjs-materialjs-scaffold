import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core/'
import GalleryIcon from '@material-ui/icons/Collections'
import ReservationIcon from '@material-ui/icons/DateRange'
import ExploreIcon from '@material-ui/icons/Language'

const styles = theme => ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    banner: {
        background: `url(https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '45%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
    },
    landingNav: {
        height: '33%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
    },
    navBox: {
        display: 'flex',
        height: '100%',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    largeButton: {
        width: '25%',
        height: '25%',
        minWidth: '200px',
        minHeight: '200px',
    },
    icon: {
        color: theme.palette.secondary.main,
        height: '100%',
        width: '100%',
    }
})

class Landing extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.banner} />

                <Typography color='secondary' className={classes.box} variant="h2" gutterBottom>
                    Stay With Soule
                </Typography>

                <div className={classes.landingNav}>
                    <div className={classes.navBox}>
                        <Typography variant="h4">
                            Gallery
                        </Typography>
                        <Button variant='outlined' className={classes.largeButton} href='gallery' color="secondary">
                            <GalleryIcon className={classes.icon} />
                        </Button>
                    </div>
                    <div className={classes.navBox}>
                        <Typography variant="h4">
                            Reservations
                        </Typography>
                        <Button variant='outlined' className={classes.largeButton} href='contact' color="inherit">
                            <ReservationIcon className={classes.icon} />
                        </Button>
                    </div>
                    <div className={classes.navBox}>
                        <Typography variant="h4">
                            Explore
                        </Typography>
                        <Button variant='outlined' className={classes.largeButton} href='explore' color="inherit">
                            <ExploreIcon className={classes.icon} />
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Landing);