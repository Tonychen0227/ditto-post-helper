import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBarBase from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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

const AppBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBarBase position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Ditto Post Helper
          </Typography>
        </Toolbar>
      </AppBarBase>
    </div>
  );
};

export const StyledAppBar = withStyles(styles)(AppBar);
