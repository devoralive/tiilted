import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import TableItem from './table'

const TableList = ({tables}) => (
  <div className="table-container my-4">
    <h4>Tables :</h4>
    <ListGroup>
      { tables && tables.map(table => (<TableItem key={table.name} {...table} />)) }
      { tables.length === 0 && (<ListGroupItem>Aucunes tables à afficher</ListGroupItem>) }
    </ListGroup>
  </div>
)

export default TableList
