import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme'

//wraps app with all neccessary higher-order components
export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Component {...props} />
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
  return WithRoot
}
