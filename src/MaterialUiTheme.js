import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

const palette = {
  primary: purple,
  background: purple,
  secondary: {
    ...green,
    A400: '#00e677'
  },
  error: red,
  typography: {
    useNextVariants: true
  }
}

export default createMuiTheme({ palette })
