import React from 'react'
import { Redirect , Route } from 'react-router-dom'
import PropTypes from 'prop-types'

PrivateRoute.propTypes = {
  user: PropTypes.object
}

export default function PrivateRoute({ user, component: Component, ...rest  }) {
  return  (
    <Route {...rest} render={props => (
      Boolean(user) ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}
