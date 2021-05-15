import { createMuiTheme, Theme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: 'light'
  }
})

export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fc5a8d',
    },
    secondary: {
      main: blue[500],
    }
  }
})