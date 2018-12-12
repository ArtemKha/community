import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { Provider } from 'react-redux'
import { messaging } from './firebase'
import Root from './components/Root'
import theme from './MaterialUiTheme'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <Root theme={theme} />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

// notification log function
messaging.onMessage(payload => {
  console.log(payload)
})
