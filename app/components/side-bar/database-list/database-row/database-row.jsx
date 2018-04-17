import React from 'react'
import { ListGroupItem } from 'reactstrap'

const DatabaseRow = ({ name, selected, onClick, accordionOpen }) => (
  <ListGroupItem className={`${selected ? 'active' : ''}`} onClick={onClick}>
    {name} {selected ? <i className={`mx-3 fas fa-lg fa-chevron-circle-${accordionOpen ? 'up' : 'down'}`}></i> : ''}
  </ListGroupItem>
)

export default DatabaseRow
