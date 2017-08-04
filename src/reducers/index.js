import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Notes from './NotesFire'
import NotesLoading from './NotesLoading'
import Search from './Search'
import User from './User'
import Auth from './Auth'

const NoteReducer = combineReducers({
  routing: routerReducer,
  Notes,
  NotesLoading,
  Search,
  User,
  Auth
})

export default NoteReducer
