import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import 'typeface-roboto'

import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { Provider } from 'react-redux'
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
