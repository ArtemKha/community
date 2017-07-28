import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Notes from './NotesFire'
import Filter from './Filter'
import User from './User'
import AuthErrors from './AuthErrors'

const NoteReducer = combineReducers({
  routing: routerReducer,
  Notes,
  Filter,
  User,
  AuthErrors
})

export default NoteReducer
