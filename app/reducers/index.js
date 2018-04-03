import { combineReducers } from 'redux'

import databases from './database'
import tables from './table'
import rows from './rows'

export default combineReducers({
  databases,
  tables,
  rows
})
