import {orange, indigo} from '@material-ui/core/colors/'
import { createMuiTheme } from '@material-ui/core/styles'


// A theme with custom primary and secondary color.
// It's optional.
export const theme = createMuiTheme({
    palette: {
      primary: {
        light: indigo[300],
        main: indigo[500],
        dark: indigo[700],
      },
      secondary: {
        light: orange[300],
        main: orange[500],
        dark: orange[700],
        contrastText: 'black',
      },
    },
  })