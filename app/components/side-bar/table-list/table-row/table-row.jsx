import React from 'react'
import { ListGroupItem } from 'reactstrap'

const TableRow = ({ name, selected, onClick }) => (
  <ListGroupItem onClick={onClick} color={`${selected && 'warning'}`} className="py-1">{name}</ListGroupItem>
)

export default TableRow