import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import AppBarCollapse from './AppBarCollapse';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    buttonCollapse: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        margin: '10px',
        boxShadow: 'none'
    }
});
class ButtonAppBarCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrapper: this.props.dataTarget.replace(/#/, ''),
            listMenus: this.props.menu
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }
    toggleCollapse(e) {
        e.preventDefault();
        let collapsed = document.getElementById(this.state.wrapper);
        if (collapsed.style.display === 'block') {
            collapsed.style.display = 'none';
        }
        else {
            collapsed.style.display = 'block';
            collapsed.style.backgroundColor = '#fff';
            collapsed.style.top = '50px';
            collapsed.style.textAlign = 'center';
            collapsed.style.width = '240px';
            collapsed.style.position = 'absolute';
            collapsed.style.zIndex = 1450;
        }
    }
    render() {
            const logo = process.env.PUBLIC_URL + '/assets/img/logo.svg';
    const classes = this.props.classes;
        return (
//             <IconButton className={this.props.classes.buttonCollapse} onClick={this.toggleCollapse}><b className='mdi mdi-home'></b></IconButton>
//             
//         );
//     }
// }
// ButtonAppBarCollapse.propTypes = {
//     classes: PropTypes.object.isRequired
// }

<AppBar position='fixed' className={this.props.classes.navigation}>
<Toolbar>
<IconButton color='inherit' aria-label='Menu' className={this.props.classes.toggleDrawer} onClick={this.props.slideDrawer}>
<img src={logo} className='img-xxs'/>
</IconButton>
<Typography variant='title' color='inherit' className={this.props.appTitle}>
MyApp
</Typography>
<AppBarCollapse/>
</Toolbar>
</AppBar>
);
}
}
export default withStyles(styles)(ButtonAppBarCollapse);
