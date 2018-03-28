import React from 'react';
import { TableRow } from 'reactstrap';

const Database = ({ name }) => (
  <li>
    <div className="database-name">{name}</div>
  </li>
);

export default Database;
