import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Filter from './Filter'
import Notes from './Notes'

const NoteReducer = combineReducers({
  routing: routerReducer,
  Notes,
  Filter
})

export default NoteReducer
