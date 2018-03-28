import React from 'react';
import { TableRow } from 'reactstrap';

const Table = (props) => (
  <li>
    <div className="table-name">{props.name}</div>
  </li>
);

export default Table;
