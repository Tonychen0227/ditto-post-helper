import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#0277bd"
    },
    secondary: {
      main: "#ab47bd"
    }
  }
});
