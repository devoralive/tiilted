import { combineReducers } from 'redux'

import app from './app'
import databases from './database'
import tables from './table'
import rows from './rows'

export default combineReducers({
  app,
  databases,
  tables,
  rows
})
