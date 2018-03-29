import React from 'react'
import Tables from './../tables'

const Database = ({ name, selected, onClick }) => (
    <li>
      <div onClick={onClick} className="database-name">{name}</div>
      { selected && (<Tables />) }
    </li>
)

export default Database
