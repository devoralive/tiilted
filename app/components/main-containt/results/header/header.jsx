import React from 'react'


const Header = ({ columns }) => (
  <div>
    {columns.map(column => (<span key={column}>{column}</span>))}
  </div>
)

export default Header