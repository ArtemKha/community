import { createStore } from 'redux'
import NoteReducer from '../reducers'
import notes from '../notesfile'
import { loadState, saveState } from './localStorage'

const configureStore = () => {

  // temporary assert for testing
  let persistedState = loadState()
  persistedState ?
    persistedState = persistedState.Notes.length ? loadState() : { Notes: notes}
      : persistedState = { Notes: notes}

  const store = createStore(
    NoteReducer,
    persistedState,
    window.devToolsExtension && window.devToolsExtension()
  )

  store.subscribe(() => {
    saveState({
      Notes: store.getState().Notes
    })
  })

  return store
}



export default configureStore
