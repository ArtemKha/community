import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from '../MaterialUiTheme'

import SignUp from './SignUp'
import SignIn from '../containers/SignIn'

import Navigation from '../containers/Navigation'
import NoteList from '../containers/NoteList'
import TextFields from '../containers/TextFields'
import Greeting from './Greeting'

import ListView from './Views/ListView'
import NoteView from './Views/NoteView'
import View from './Views/View'

import NoMatch from './NoMatch'
import PrivateRoute from '../containers/PrivateRoute'

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {/* <PrivateRoute path="/note/:id" component={View}/> */}
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/404" component={NoMatch}/>
          <PrivateRoute path="/" component={View}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default Root
