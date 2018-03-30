import Connector from './../connectors/mysql'

export const SELECT_TABLE = Symbol('@@table/SELECT_TABLE')
export const selectTable = name => {
    return {
        type: SELECT_TABLE,
        name
    }
}

export const PUSH_TABLE = Symbol('@@table/PUSH_TABLE')
const pushTable = name => {
    return {
        type: PUSH_TABLE,
        name
    }
}

export const RESET_TABLES = Symbol('@@table/RESET_TABLES')
const resetTables = () => {
    return {
        type: RESET_TABLES
    }
}

const fetchTables = () => {
    return Connector.raw('show tables')
}

export const getTables = (name) => {
    const propertyName = `Tables_in_${name}`

    return dispatch => {
        dispatch(resetTables())
        return fetchTables().then(
            tables => tables[0].map(table => {
                dispatch(pushTable(table[propertyName]))
            }),
            error => console.error(error)
        )
    }
}
