import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBarBase from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GithubCircle from "mdi-material-ui/GithubCircle";
import Reddit from "mdi-material-ui/Reddit";
import Discord from "mdi-material-ui/Discord";

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
          <IconButton target="_blank" href="https://discord.gg/dittos">
            <Discord color="secondary" />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.reddit.com/r/morebreedingdittos/"
          >
            <Reddit color="secondary" />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://github.com/ShinySylveon04/ditto-post-helper"
          >
            <GithubCircle color="secondary" />
          </IconButton>
        </Toolbar>
      </AppBarBase>
    </div>
  );
};

export const StyledAppBar = withStyles(styles)(AppBar);
