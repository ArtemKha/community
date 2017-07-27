import { createStore, applyMiddleware  } from 'redux'
import NoteReducer from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState, saveState } from './localStorage'
import { startListenToAuthChanges } from '../actions/auth'

const configureStore = () => {

  let persistedState = loadState()

  const store = createStore(
    NoteReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  )

  store.subscribe(() => {
    saveState({
      Notes: store.getState().Notes
    })
  })

  store.dispatch(startListenToAuthChanges())

  return store
}

export default configureStore
