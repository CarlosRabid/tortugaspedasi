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
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import StorageIcon from '@material-ui/icons/Storage';
import PollIcon from '@material-ui/icons/Poll';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1
  }
}))

function NavBar(props) {
const classes = styles;
  const spclasses = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  function onLogout() {
    props.logOut()
  }


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

        <Link to="/spread" style={{ textDecoration: 'none', color: 'black' }}>
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

  return (
    <div>
      <AppBar position="fixed" style= {{background:"#166088"}}>

        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
        <Toolbar>

          <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon ></MenuIcon>
          </IconButton>

          <Typography variant="h6" color="inherit">
            Tortugas Pedasí
          </Typography>

          <ToolbarMenu
            render={collapsed => {
              return collapsed
                ? [<MenuItem key="logout" onClick={onLogout} autoclose={true}>
                  Logout
                    </MenuItem>]
                : [< Button
                  key="signup"
                  color="inherit"
                  onClick={onLogout}
                  className={classes.menuButton}
                >
                  Logout
                    </Button>];
            }}
          />
        </Toolbar>
      </AppBar>
      <div className={spclasses.offset}> {/* to add content below navbar */}
      </div>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);