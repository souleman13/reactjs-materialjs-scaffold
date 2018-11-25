import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core/';
import Banner from '../components/banner'

const styles = theme => ({
    root: {
        height: '100vh',
        width: '100vw',
    },

})

class Explore extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Banner />
                
            </div>
        )
    }
}

Explore.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Explore)