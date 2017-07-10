import { createMuiTheme  } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import 'typeface-roboto';

export default createMuiTheme({
  palette: createPalette({
    primary: purple,
    accent: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  }),
});
