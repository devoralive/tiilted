import React from 'react'

const Row = ({ row, columns }) => (
  <div>
    { columns && columns.map(column => (<span key={column}>{row[column]}</span>)) }
  </div>
)

export default Row