import React from 'react';
import { ListGroup } from 'reactstrap';

import DatabaseRow from './database-row'

const DatabaseList = ({ databases }) => (
  <div className="database-container">
    <h3>Base de données :</h3>
    <ListGroup>
      { databases && databases.map( (db) => ( <DatabaseRow key={db.name} {...db}/> )) }
    </ListGroup>
  </div>
)

export default DatabaseList