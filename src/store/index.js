import { createStore, applyMiddleware  } from 'redux'
import NoteReducer from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { startListenToAuthChanges } from '../actions/auth'
import { watchNoteChangedEvent } from '../actions/note'
// import { getNotes } from '../actions/get_notes'

const configureStore = () => {
  const store = createStore(
    NoteReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )

  // listen for changes authUser and Notes
  store.dispatch(watchNoteChangedEvent())
  store.dispatch(startListenToAuthChanges())

  return store
}

export default configureStore
