import { createMuiTheme } from '@material-ui/core/styles'
import { purple, green, red } from '@material-ui/core/colors'

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

export default createMuiTheme(palette)
