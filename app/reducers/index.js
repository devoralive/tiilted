import { combineReducers } from 'redux'

import databases from './database'
import tables from './table'
import select from './select'

export default combineReducers({
  databases,
  tables,
  select
})
