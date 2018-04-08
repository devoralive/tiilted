import React from 'react';
import { ListGroup } from 'reactstrap';

import DatabaseRow from './database-row'

const DatabaseList = ({ databases, accordionOpen }) => (
  <div className="database-container">
    <h3 className="font-weight-light">Base de données :</h3>
    <ListGroup className={`accordion-bread ${accordionOpen ? 'accordion-open' : 'accordion-close'}`}>
      { databases && databases.map( (db) => ( <DatabaseRow key={db.name} {...db}/> )) }
    </ListGroup>
  </div>
)

export default DatabaseList