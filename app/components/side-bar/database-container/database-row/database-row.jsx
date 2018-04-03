import React from 'react'
import { ListGroupItem } from 'reactstrap'

const DatabaseRow = ({ name, selected, onClick }) => (
    <ListGroupItem className={`${selected && 'active'}`} onClick={onClick}>
      {name}
    </ListGroupItem>
)

export default DatabaseRow
