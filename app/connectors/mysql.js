import Knex from 'knex';

const connection = Knex({
    client: 'mysql',
    connection: {
        host: '0.0.0.0',
        user: 'root',
        password: 'tiilted',
        port: '3306'
    },
    debug: true
});

export default connection;
