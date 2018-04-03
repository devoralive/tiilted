import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import TableItem from './table'

const TableList = ({tables}) => (
  <div className="table-container my-4">
    <div className="d-flex justify-content-between mb-2">
      <h3 className="font-weight-light">Tables :</h3>
      { tables.length > 0 && (<Button color="success"><i className="fas fa-plus"></i></Button>) }
    </div>
    <ListGroup>
      { tables && tables.map(table => (<TableItem key={table.name} {...table} />)) }
      { tables.length === 0 && (<ListGroupItem>Aucunes tables à afficher</ListGroupItem>) }
    </ListGroup>
  </div>
)

export default TableList
