import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from './MaterialUiTheme'
import './css/index.css'
import './css/App.css'

import registerServiceWorker from './registerServiceWorker'
import SignUp from './components/SignUp'
import ListView from './components/ListView'
import NoteView from './components/NoteView'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import NoteReducer from './reducers'

const store = createStore(
  NoteReducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
	<Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListView}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/edit/:id" component={NoteView}/>
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
	document.getElementById('root')
)

registerServiceWorker()
