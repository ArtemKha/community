import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: purple, 
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
});
