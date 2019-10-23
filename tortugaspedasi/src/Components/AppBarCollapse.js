import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ButtonAppBarCollapse from './ButtonAppBarCollapse';
const styles = theme => ({
    root: {
        position: 'absolute',
        right: 0
    },
    wrapper: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        margin: '10px',
        paddingLeft: '16px',
        right: 0,
        position: 'relative',
        width: '100%',
        background: 'transparent'
    },
    listContainer: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
    },
    listMenus: {
        float: 'left'
    },
    listItems: {
        display: 'inline- block',
    textAlign: 'center',
    padding: '6px 8px'
}
})
class AppBarCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    render() {
        const classes = this.props.classes;
        return (
            <div className={this.props.classes.root}>
                <ButtonAppBarCollapse dataTarget='#appbar-collapse'/>
<div className={this.props.classes.wrapper} id='appbar-collapse'>
<ul className={this.props.classes.listContainer} id='list-appbar-collapse'>
<li className={this.props.classes.listMenus}><a className={this.props.classes.listItems}>Login</a></li>
                <li className={this.props.classes.listMenus}><a className={this.props.classes.listItems}>Signup</a></li>
</ul>
</div >
</div >
);
    }
}
AppBarCollapse.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(AppBarCollapse);
