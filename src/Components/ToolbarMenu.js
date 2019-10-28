import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ToolbarMenuIcon from "./ToolbarMenuIcon";

const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});

const ToolbarMenu = props => (
  <div className={props.classes.root}>
    <ToolbarMenuIcon>{props.render(true)}</ToolbarMenuIcon>
    <div className={props.classes.buttonBar} id="toolbar">
      {props.render(false)}
    </div>
  </div>
);

export default withStyles(styles)(ToolbarMenu);
