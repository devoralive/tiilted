import React from 'react'

const Table = ({ name, selected, onClick }) => (
  <li>
    <span onClick={onClick} className={`${selected ? '' : 'un'}selected`}>
      {name}
    </span>
  </li>
)

export default Table
