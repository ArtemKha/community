import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Filter from './Filter'
// import Notes from './Notes'
import User from './User'
import Notes from './NotesFire'

const NoteReducer = combineReducers({
  routing: routerReducer,
  Notes,
  Filter,
  User
})

export default NoteReducer
