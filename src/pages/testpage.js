import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';


const styles = theme => ({})

class NotFound extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Typography variant="h4" gutterBottom>
                Test Page
            </Typography>
        );
    }
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);