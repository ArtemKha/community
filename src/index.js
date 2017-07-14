import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from './MaterialUiTheme'
import './css/index.css'
import './css/App.css'

import registerServiceWorker from './registerServiceWorker'
import NoteList from './containers/NoteList'
import TextFields from './containers/TextFields'
import SignUp from './components/SignUp'
import Navigation from './containers/Navigation'
import App from './containers/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import NoteReducer from './reducers'

const store = createStore(
  NoteReducer,
  window.devToolsExtension && window.devToolsExtension()
)

const AppStyle = {
  display: 'flex',
  'flexDirection': 'row',
  // flexWrap: 'wrap',
  // 'justify-content': 'center',
  // border: '5px solid blue',
}

ReactDOM.render(
	<Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={AppStyle}>
          <Route exact path="/" component={App}/>
          <Route path="/edit" component={App}/>
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/edit/:id" component={TextFields}/>
            {/* <Route path="/" component={NoteList}/> */}
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
	document.getElementById('root')
)

registerServiceWorker()
