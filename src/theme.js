import { deepPurple, cyan } from '@material-ui/core/colors/'
import { createMuiTheme } from '@material-ui/core/styles'


// A theme with custom primary and secondary color.
// It's optional.
export const theme = createMuiTheme({
    palette: {
      primary: deepPurple,
      secondary: cyan
    },
    typography: {
      fontSize:18,
      fontFamily: [
        'caveat',
      ].join(','),
    },
  })