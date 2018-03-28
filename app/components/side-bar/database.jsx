import React from 'react';
import { TableRow } from 'reactstrap';

const Database = (props) => (
  <li>
    <div className="database-name">{props.name}</div>
  </li>
);

export default Database;
