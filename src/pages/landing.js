import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core/'
import GalleryIcon from '@material-ui/icons/Collections'
import GuestIcon from '@material-ui/icons/DateRange'
import ExploreIcon from '@material-ui/icons/Language'
import ContactModal from '../components/contactModal'
import Banner from '../components/banner'

const styles = theme => ({
    root: {
        height: '100vh',
        width: '100vw',
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
        marginTop:33,
    },
    navText: {
        marginBottom:10,
    },
    largeButton: {
        width: '25%',
        height: '25%',
        minWidth: '200px',
        minHeight: '200px',
    },
    icon: {
        height: '100%',
        width: '100%',
    }
})

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openGuest: false,
        }
    }
    handleModal(key) {
        this.setState({
            [key]: !this.state[key],
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>

                <Banner/>

                <div className={classes.landingNav}>
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="secondary" className={classes.navText}>
                            Gallery
                        </Typography>
                        <Button variant='outlined' className={classes.largeButton} href='gallery' color="secondary">
                            <GalleryIcon className={classes.icon} color="secondary" />
                        </Button>
                    </div> 
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="primary" className={classes.navText}>
                            Guests
                        </Typography>
                        <Button variant='outlined' className={classes.largeButton}  color="primary" onClick={() => this.handleModal('openContact')}>
                            <GuestIcon className={classes.icon} color="primary" />
                        </Button>
                        <ContactModal
                            open={this.state.openContact}
                            onClose={() => this.handleModal('openContact')}
                        />
                    </div>
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="secondary" className={classes.navText}>
                            Explore
                        </Typography>
                        <Button variant='outlined' className={classes.largeButton} href='explore' color="secondary">
                            <ExploreIcon className={classes.icon} color="secondary" />
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