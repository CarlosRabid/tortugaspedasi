import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ToolbarMenu from "./ToolbarMenu";
import { Button, MenuItem, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import '../styles/NavBar.css';
// import { withTranslation } from 'react-i18next';


// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import Form from './Form/Form';
// import Spreadsheet from './Spreadsheet/Spreadsheet';
// import Analytics from './Analytics/Analytics';
// import Landing from './Landing';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { classes } = props;
  function onLogin() {
    alert("Login TBD");
  }
  function onSignup() {
    alert("Signup TBD");
  }

  function testClick(text) {
    alert("Redirecting to " + text);
  }


  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>

        <Link to="/form" style={{ textDecoration: 'none' }}>
          <ListItem button key="form" name="form" >
            <ListItemIcon name="form"><MailIcon name="form" /></ListItemIcon>
            <ListItemText primary="form" name="form" />
          </ListItem>
        </Link>

        <Link to="/spread" style={{ textDecoration: 'none' }}>
          <ListItem button key="spreadsheet" >
            <ListItemIcon><InboxIcon /> </ListItemIcon>
            <ListItemText primary="spreadsheet" />
          </ListItem>
        </Link>

        <Link to="/analytics" style={{ textDecoration: 'none' }}>
          <ListItem button key="analytics" >
            <ListItemIcon><InboxIcon /> </ListItemIcon>
            <ListItemText primary="analytics" />
          </ListItem>
        </Link>

      </List>

      <Divider />

    </div>
  );

  const toggleDrawer = (side, open) => event => {
    console.log(event.currentTarget)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  // let options = ["form", "test"]

  return (
    <AppBar position="fixed">
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer('left', true)}>
          <MenuIcon ></MenuIcon>


          {/* <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
              <React.Fragment>
                <Menu {...bindMenu(popupState)}>
                 <MenuItem key = "home" id = "home" onClick={handleClick}>Home</MenuItem>
                 
                 
                 
                  {/* {options.map(option => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                      {option}
                    </MenuItem>
                  ))} */}
          {/* </Menu>
              </React.Fragment>
            )}
          </PopupState> */}
        </IconButton>
        <Typography variant="title" color="inherit">
          Tortugas Pedasí
          </Typography>

        <ToolbarMenu
          render={collapsed => {
            return collapsed
              ? [
                <MenuItem key="login" onClick={onLogin} autoclose={true}>
                  Login
                    </MenuItem>,
                <MenuItem key="signup" onClick={onSignup}>
                  Signup
                    </MenuItem>
              ]
              : [
                <Button
                  key="login"
                  color="inherit"
                  onClick={onLogin}
                  className={classes.menuButton}
                >
                  Login
                    </Button>,
                <Button
                  key="signup"
                  color="inherit"
                  onClick={onSignup}
                  className={classes.menuButton}
                >
                  Signup
                    </Button>
              ];
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);


// class NavBar extends Component {
//     constructor() {
//         super();
//         this.state = {}
//     }

//     updateNavBar = () => {
//         this.props.updateNavBar("")
//     }

//     ButtonAppBar = (props) => {
//         const { classes } = props;
//         function onLogin() {
//           alert("Login TBD");
//         }
//         function onSignup() {
//           alert("Signup TBD");
//         }}


//     render() {
//         return (
//             <AppBar position="fixed">
//               <Toolbar>
//                 <IconButton color="inherit" aria-label="Menu">
//                   <MenuIcon />
//                 </IconButton>
//                 <Typography variant="title" color="inherit">
//                   MyApp
//                 </Typography>

//                 <ToolbarMenu
//                   render={collapsed => {
//                     return collapsed
//                       ? [
//                           <MenuItem key="login" onClick={onLogin} autoclose={true}>
//                             Login
//                           </MenuItem>,
//                           <MenuItem key="signup" onClick={onSignup}>
//                             Signup
//                           </MenuItem>
//                         ]
//                       : [
//                           <Button
//                             key="login"
//                             color="inherit"
//                             onClick={onLogin}
//                             className={classes.menuButton}
//                           >
//                             Login
//                           </Button>,
//                           <Button
//                             key="signup"
//                             color="inherit"
//                             onClick={onSignup}
//                             className={classes.menuButton}
//                           >
//                             Signup
//                           </Button>
//                         ];
//                   }}
//                 />
//               </Toolbar>
//             </AppBar>
//           );
//         }}

//         // ButtonAppBar.propTypes = {
//         //   classes: PropTypes.object.isRequired
//         // };

//         export default withStyles(styles)(ButtonAppBar);


//         const { t, i18n } = this.props;

//         return (
//             <nav>
//                 <div className="navigation" id={this.props.location}>
//                     <Link to="/home"><span>{t('Home')}</span></Link>
//                     {" "}
//                     <Link to="/form"><span >{t('Form')}</span></Link>
//                     {" "}
//                     <Link to="/spread"><span>{t('Spreadsheet')}</span></Link>
//                     {" "}
//                     <Link to="/analytics"><span>{t('Analytics')}</span></Link>
//                     <span className= "currentUser"><Link to="/">{!this.props.name ? "Login" : this.props.name}</Link></span>
//                 </div>
//             </nav>
//         );
//     }
// }

// export default withTranslation('translation')(NavBar);

// MATERIAL UI CODE //
            // <div>
            //     <Router>
            //         <div><AppBar position="static">

            //             <Toolbar>
            //                 <div className="navbarLinks">
            //                     <Link to="/">Home</Link>
            //                     <Link to="/form">Form</Link>
            //                     <Link to="/spread">Spreadsheet</Link>
            //                     <Link to="/analytics">Analytics</Link>

            //                 </div>
            //                 <div id="logoutButton">
            //                     <Button edge="end" variant="contained" >Logout</Button>
            //                 </div>
            //             </Toolbar>

            //         </AppBar>
            //             <Route path="/" exact render={() => <Landing />} />
            //             <Route path="/form" exact render={() => <Form />} />
            //             <Route path="/spread" exact render={() => <Spreadsheet />} />
            //             <Route path="/analytics" exact render={() => < Analytics />} />
            //         </div>
            //     </Router>

            // </div>