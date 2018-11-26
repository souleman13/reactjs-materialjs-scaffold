import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Avatar,Button } from '@material-ui/core/'
import BackIcon from '@material-ui/icons/BackspaceOutlined'
import classnames from 'classnames';

const styles = theme => ({
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
    logo: {
        height: '100%',
        width: '100%',
    },
    links: {
        display: 'flex',
        flexFlow:'column nowrap',
        backgroundColor: theme.palette.primary.light,
        // margin:'0px 100px'
    },
})

class ExploreTile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            img: props.img,
            title: props.title,
            links: props.links,
        }
    }

    render() {

        const { classes } = this.props

        return (
            <div className={classes.navBox}>
                <Typography variant="h3" color="primary" className={classes.navText}>
                    {this.state.title}
                </Typography>
                {
                    this.state.showMore ?
                        <Avatar className={classnames(classes.largeButton, classes.links)}>
                            <ul className={classes.linkList}>
                                {this.state.links.map(l => (<li key={l.name}><Typography color='primary' variant='title'><a href={l.link} target='_blank' rel="noopener noreferrer" >{l.name}</a></Typography></li>))}
                            </ul>
                            <Button variant='text' color="primary" onClick={e => this.setState({ showMore: !this.state.showMore })} >
                                <BackIcon className={classes.backIcon} color="secondary" />
                            </Button>
                        </Avatar>
                        :
                        <Avatar className={classes.largeButton} src={this.state.img} alt='explore_img' onClick={e => this.setState({ showMore: !this.state.showMore })} />
                }

            </div>
        )
    }
}

ExploreTile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ExploreTile)