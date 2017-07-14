import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Filter from './Filter'
import NoteList from './NoteList'

const NoteReducer = combineReducers({
  routing: routerReducer,
  NoteList,
  Filter
})

export default NoteReducer
