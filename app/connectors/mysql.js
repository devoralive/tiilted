import Knex from 'knex'

export const defaultConnection = Knex({
    client: 'mysql',
    connection: {
        host: '0.0.0.0',
        user: 'root',
        password: 'tiilted',
        port: '3366'
    },
    debug: true
})

export const getConnection = (database) => {
    return Knex({
        client: 'mysql',
        connection: {
            host: '0.0.0.0',
            user: 'root',
            password: 'tiilted',
            port: '3366',
            database
        },
        debug: true
    })
}
