import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme  } from 'material-ui/styles';
import 'typeface-roboto';

import './css/index.css';
import App from './containers';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import NoteReducer from './reducers';
import { Provider } from 'react-redux';


import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: createPalette({
    primary: purple, // Purple and green play nicely together.
    accent: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  }),
});


const store = createStore(
  NoteReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
	<Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
	document.getElementById('root')
);

registerServiceWorker();
