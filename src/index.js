import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from './MaterialUiTheme'
import './css/index.css'
import './css/App.css'

import NoteList from './containers/NoteList'
import EditNote from './containers/EditNote'
import registerServiceWorker from './registerServiceWorker'

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
          <Route exact path="/" component={NoteList}/>
          <Route path="/edit/:id" component={EditNote}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
	document.getElementById('root')
)

registerServiceWorker()
