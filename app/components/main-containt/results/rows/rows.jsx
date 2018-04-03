import React from 'react'
import Row from './row'

const Rows = ({ rows, columns }) => (
  <tbody>
    { rows && rows.map(row => (<Row key={row.id} row={row} columns={columns} />)) }
  </tbody>
)

export default Rows