import React from 'react'


const Header = ({ columns }) => (
  <thead>
    <tr>
      { columns.map(column => (<th key={column}>{column}</th>)) }
    </tr>
  </thead>
)

export default Header