import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import TableRow from './table-row'

const TableList = ({tables}) => (
  <div className="table-container my-4">
    <div className="d-flex justify-content-between mb-2">
      <h3 className="font-weight-light">Tables :</h3>
      <Button color="success"><i className="fas fa-plus"></i></Button>
    </div>
    <ListGroup>
      { tables && tables.map(table => (<TableRow key={table.name} {...table} />)) }
      { tables.length === 0 && (<ListGroupItem>Aucunes tables à afficher</ListGroupItem>) }
    </ListGroup>
  </div>
)

export default TableList
