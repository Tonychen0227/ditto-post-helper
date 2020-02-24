import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    marginTop: "1rem",
    marginBottom: "1rem",
    maxWidth: 150
  }
};

export const StyledTextField = withStyles(styles)(TextField);
