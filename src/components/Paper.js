import React from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: "380px",
    margin: "10px auto",
    padding: "20px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export function PaperLayout({ children }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      {children}
    </Paper>
  );
}
