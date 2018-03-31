import React from 'react'


const Header = ({ columns }) => (
  <div>
    {columns.map(column => (<span>{column.Field}</span>))}
  </div>
) 