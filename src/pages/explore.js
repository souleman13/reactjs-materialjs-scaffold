import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core/';
import Banner from '../components/banner'
import DocIcon from '@material-ui/icons/CloudDownload'
import BackIcon from '@material-ui/icons/BackspaceOutlined'
import Exploretile from '../components/exploreTile'

const styles = theme => ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    explore: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent:'space-around'
    },
    navBox: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 400,
    },
    navText: {
        marginBottom: 10,
    },
    largeButton: {
        width: '25%',
        height: '25%',
        minWidth: '250px',
        minHeight: '250px',
    },
    icon: {
        height: '100%',
        width: '100%',
    },
    backIcon: {
        paddingRight: 5,
    },
})

class Explore extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Banner />
                <Button variant='text' href='/' color="primary">
                    <BackIcon className={classes.backIcon} color="primary" />
                    <Typography variant="h6" color='primary'>
                        Back
                    </Typography>
                </Button>
                <div className={classes.explore}>

                    <Exploretile img='https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg' title='Ski~Board' links={[{ name: 'blah', link: 'blah' }, { name: 'test', link: 'test' }]} />
                    <Exploretile img='https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg' title='Hike~Bike' links={[{ name: 'blah', link: 'blah' }, { name: 'test', link: 'test' }]} />
                    <Exploretile img='https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg' title='Downtown' links={[{ name: 'blah', link: 'blah' }, { name: 'test', link: 'test' }]} />
                    <Exploretile img='https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg' title='Eat~Drink' links={[{ name: 'blah', link: 'blah' }, { name: 'test', link: 'test' }]} />
                    <Exploretile img='https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg' title='Sports' links={[{ name: 'blah', link: 'blah' }, { name: 'test', link: 'test' }]} />

                    <div className={classes.navBox}>
                        <Typography variant="h3" color="secondary" className={classes.navText}>
                            Downloads
                        </Typography>
                        <Button variant='text' className={classes.largeButton} color="secondary">
                            <DocIcon className={classes.icon} color="secondary" />
                        </Button>
                    </div>

                </div>
            </div>
        )
    }
}

Explore.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Explore)