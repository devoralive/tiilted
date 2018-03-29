import { combineReducers } from 'redux'

import databases from './database'
import tables from './table'

export default combineReducers({
  databases,
  tables
})
