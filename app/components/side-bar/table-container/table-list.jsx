import React from 'react';

const TableList = ({tables}) => (
  <div className="table-container my-4">
    <h4>Tables :</h4>
    <ul>
      { tables && tables.map( (table,index) => ( <li key={index}>{table.name}</li>) )}
      { tables.length == 0 && (<li>Aucunes tables à afficher</li>) }
    </ul>
  </div>
)

export default TableList
