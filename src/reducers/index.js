import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import NoteList from './NoteList'

const NoteReducer = combineReducers({
  routing: routerReducer,
  NoteList,
})

export default NoteReducer
