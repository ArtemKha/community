import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import configureStore from './store'
import Root from './components/Root'
import './App.css'
import { messaging } from './firebase'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
    <Root/>
  </Provider>,
	document.getElementById('root')
)

registerServiceWorker()

// notification function
messaging.onMessage((payload) => {
	console.log(payload)
})
