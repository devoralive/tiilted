import React from 'react'
import Row from './row'

const Rows = ({ rows, columns }) => (
  <div>
    { rows && rows.map(row => (<Row key={row.id} row={row} columns={columns} />)) }
  </div>
)

export default Rows