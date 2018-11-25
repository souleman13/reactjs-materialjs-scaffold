import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core/';

const styles = theme => ({
    banner: {
        background: `url(https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '45%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',
        paddingRight: 10,
        paddingTop: 10,
    },
})

class Banner extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.banner} >
                <Typography variant="h2">
                    Stay With Soule
                </Typography>
            </div>
        )
    }
}

Banner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner)