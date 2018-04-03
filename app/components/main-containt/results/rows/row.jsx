import React from 'react'

const Row = ({ row, columns }) => (
  <tr>
    { columns && columns.map(column => (<td key={column}>{row[column]}</td>)) }
  </tr>
)

export default Row