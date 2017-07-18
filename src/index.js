import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import NoteReducer from './reducers'
import App from './components/App'

const store = createStore(
  NoteReducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
)

registerServiceWorker()
