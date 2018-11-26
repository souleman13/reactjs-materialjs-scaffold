import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DialogTitle, Dialog, Typography, Button, Avatar } from '@material-ui/core'
import AirbnbLogo from '../images/airbnb.png'
import VRBOLogo from '../images/vrbo.png'

const styles = theme => ({
    contact: {
        display: 'flex',
        flexFlow: 'row nowrap',
        minWidth: 250,
    },
    navBox: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 400,
        padding: 15,
    },
    navText: {
        marginBottom: 10,
    },
    logo: {
        height: '100%',
        width: '100%'
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

class ContactModal extends React.Component {

    render() {

        const { classes, onClose, open } = this.props

        return (
            <Dialog open={open} onClose={onClose} maxWidth='lg' aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">Make a Reservation</DialogTitle>
                <div className={classes.contact}>
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="primary" className={classes.navText}>
                            AirBnB
                        </Typography>
                        <Button variant='outlined' className={classes.largeButton} color="primary" target='_blank' href='https://www.airbnb.com/rooms/24756755'>
                            <Avatar className={classes.logo} src={AirbnbLogo} alt='airbnb' />
                        </Button>
                    </div>
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="primary" className={classes.navText}>
                            VRBO
                        </Typography>
                        <Button variant='outlined' className={classes.largeButton} color="primary" target='_blank' href='https://www.vrbo.com/1332328'>
                            <Avatar className={classes.logo} src={VRBOLogo} alt='vrbo' />
                        </Button>
                    </div>
                </div>
            </Dialog>
        );
    }
}

ContactModal.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default withStyles(styles)(ContactModal);