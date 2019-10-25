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
import { BrowserRouter as Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import StorageIcon from '@material-ui/icons/Storage';
import PollIcon from '@material-ui/icons/Poll';
//adding a comment to submit

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

  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const { classes } = props;
  function onLogin() {
    alert("Login TBD");
  }
  function onLogout() {
    alert("Logout TBD");
  }

  // function testClick(text) {
  //   alert("Redirecting to " + text);
  // }


  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>

      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key="home" >
            <ListItemIcon ><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link to="/form" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key="form" >
            <ListItemIcon ><ListAltIcon /></ListItemIcon>
            <ListItemText primary="Form" />
          </ListItem>
        </Link>

        <Link to="/spread" style={{ textDecoration: 'none',color: 'black'}}>
          <ListItem button key="spreadsheet" >
            <ListItemIcon><StorageIcon /> </ListItemIcon>
            <ListItemText primary="Spreadsheet" />
          </ListItem>
        </Link>

        <Link to="/analytics" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key="analytics" >
            <ListItemIcon><PollIcon /> </ListItemIcon>
            <ListItemText primary="Analytics" />
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
                <MenuItem key="logout" onClick={onLogout}>
                  Logout
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
                  onClick={onLogout}
                  className={classes.menuButton}
                >
                  Logout
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