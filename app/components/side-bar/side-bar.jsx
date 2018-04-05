import React from 'react';
import { Button, ListGroup } from 'reactstrap';

import QuickSearch from './quick-search';
import DatabaseContainer from './database-list';
import TableContainer from './table-list';

const SideBar = ({ databases }) => {
  
  if (databases.length > 0) {
    return (
      <div className="sidebar-container">
        <QuickSearch />

        <DatabaseContainer />

        <TableContainer />
      </div>
    )
  } else {
    return (
      <div className="sidebar-container">
        <p className="m-0">Il n'y a aucunes données dans la base de données</p>
        <Button color="primary">Créer une nouvelle base</Button>
      </div>
    )
  }
}
  

export default SideBar;
