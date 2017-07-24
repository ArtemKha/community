import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from '../MaterialUiTheme'
import '../css/App.css'

import SignUp from './SignUp'
import SignIn from './SignIn'
import ListView from './Views/ListView'
import NoteView from './Views/NoteView'
import NoMatch from './NoMatch'

import { auth } from '../firebase'

class App extends Component {
  constructor(){
    super()

    this.state = {
      user: null
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListView}/>
            <Route path="/note/:id" component={NoteView}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/404" component={NoMatch}/>
            <Route component={NoMatch}/>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }

}

export default App
