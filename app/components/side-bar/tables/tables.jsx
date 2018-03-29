import React from 'react'

const Tables = ({ tables }) => (
  <ul>
    {tables && tables.map(table => (<li key={table.name}>{table.name}</li>))}
  </ul>
)

export default Tables
