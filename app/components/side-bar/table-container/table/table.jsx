import React from 'react'
import { ListGroupItem } from 'reactstrap'

const TableItem = ({ name, selected, onClick }) => (
  <ListGroupItem onClick={onClick} color={`${selected && 'warning'}`} className="py-1">{name}</ListGroupItem>
)

export default TableItem