import React from 'react';
import Database from './database';
import { ListGroup } from 'reactstrap';

const SideBar = ({ databases }) => (
  <ListGroup>
    { databases && databases.map(db => (<Database key={db.name} {...db} />)) }
  </ListGroup>
);

export default SideBar;
