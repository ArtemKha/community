import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from '../MaterialUiTheme'
import '../css/App.css'

import SignUp from './SignUp'
import ListView from './ListView'
import NoteView from './NoteView'

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListView}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/edit/:id" component={NoteView}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
