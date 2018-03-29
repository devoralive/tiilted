import React from 'react'
import { Tables } from './../tables'

const Database = ({ name, selected, onClick }) => {
    console.log(name, selected, onClick)
    if (selected) {
        return (
            <li>
              <div onClick={onClick} className="database-name">{name}</div>
              <Tables />
            </li>
        )
    } else {
        return (
            <li>
              <div onClick={onClick} className="database-name">{name}</div>
            </li>
        )
    }
}

export default Database
