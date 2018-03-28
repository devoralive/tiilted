import React from 'react';
import Database from './database';
import { ListGroup } from 'reactstrap';

const SideBar = (props) => (
  <ListGroup>
    {props.databases.map((database, key) => (<Database key={key} name={database} />))}
  </ListGroup>
);

export default SideBar;
