import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import ReactLoading from 'react-loading'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from '../MaterialUiTheme'
// import { createMuiTheme } from 'material-ui/styles';

// const theme = createMuiTheme();

function MyLoadingComponent() {
  return <ReactLoading type="bubbles" color="purple"/>
}

const SignUp = Loadable({
  loader: () => import('../containers/SignUp'),
  loading: MyLoadingComponent
})

const SignIn = Loadable({
  loader: () => import('../containers/SignIn'),
  loading: MyLoadingComponent
})

const ListView = Loadable({
  loader: () => import('./Views/ListView'),
  loading: MyLoadingComponent
})

const NoteView = Loadable({
  loader: () => import('./Views/NoteView'),
  loading: MyLoadingComponent
})

const NoMatch = Loadable({
  loader: () => import('./NoMatch'),
  loading: MyLoadingComponent
})

const PrivateRoute = Loadable({
  loader: () => import('../containers/PrivateRoute'),
  loading: MyLoadingComponent
})

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <PrivateRoute exact path="/notes" component={ListView}/>
          <PrivateRoute path="/notes/:id" component={NoteView}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/404" component={NoMatch}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
		</MuiThemeProvider>
  )
}

export default Root
