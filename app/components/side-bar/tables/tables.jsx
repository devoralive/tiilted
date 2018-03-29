import React from 'react'

const Tables = ({ tables }) => (
  <ul>
    {tables && tables.map(table => (<li>{table.name}</li>))}
  </ul>
)

export default Tables
