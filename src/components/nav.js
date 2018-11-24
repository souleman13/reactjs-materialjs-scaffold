import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import ContactIcon from '@material-ui/icons/Email';
import ProfileIcon from '@material-ui/icons/Person';
import SkillIcon from '@material-ui/icons/Whatshot';

import ContactModal from './contactInfoModal'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    homeButton: {

    },
    menuButton: {
        backgroundColor: theme.palette.primary.dark,
        marginLeft: -12,
        marginRight: 20,
    },
    icon: {
        color: theme.palette.secondary.main,
        marginRight: 6,
    }
})

class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openContact: false,
            openResume: false,
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
                <AppBar className={classes.root} position="static">
                    <Toolbar>
                        <IconButton className={classes.icon} href='/' color="inherit" aria-label="Menu">
                            <HomeIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            Name of Business
                        </Typography>

                        <Button variant='outlined' className={classes.menuButton} href='portfolio' color="inherit">
                            <ProfileIcon className={classes.icon} />
                            Page1
                        </Button>

                        <Button variant='outlined' className={classes.menuButton} href='skills' color="inherit">
                            <SkillIcon color='secondary' className={classes.icon} />
                            Pages2
                        </Button>

                        <Button variant='outlined' className={classes.menuButton} onClick={() => this.handleModal('openContact')} color="inherit">
                            <ContactIcon className={classes.icon} />
                            Contact Us
                         </Button>
                        <ContactModal
                            open={this.state.openContact}
                            onClose={() => this.handleModal('openContact')}
                        />
                    </Toolbar>
                </AppBar>
        );
    }
}

TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNav);