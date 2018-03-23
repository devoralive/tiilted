import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'tiilted',
    database : 'tiilted'
  }
});

knex.select('name').from('user').map(function(row) {
  console.log(row)
})

// Rendering
ReactDOM.render( <App />, document.getElementById('root') );
