import React from 'react'
import Table from './table'

const TableList = ({tables}) => (
  <div className="table-container my-4">
    <h4>Tables :</h4>
    <ul>
      { tables && tables.map(table => (<Table key={table.name} {...table} />)) }
      { !tables && (<li>Aucunes tables à afficher</li>) }
    </ul>
  </div>
)

export default TableList
