import React from 'react';
import Table from './table';
import { ListGroup } from 'reactstrap';

const SideBar = (props) => (
  <ListGroup>
    {props.tables.map((table, key) => (<Table key={key} name={table} />))}
  </ListGroup>
);

export default SideBar;
