import React from 'react'
import Table from './table'

const Tables = ({ tables }) => (
  <ul>
    {tables && tables.map(table => (<Table key={table.name} {...table} />))}
  </ul>
)

export default Tables
