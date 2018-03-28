import Connector from './../connectors/mysql'

export const SELECT_DATABASE = Symbol('@@database/SELECT')
export const selectDatabase = name => {
    return {
        type: SELECT_DATABASE,
        name
    }
}

export const PUSH_DATABASE = Symbol('@@database/PUSH')
const pushDatabase = name => {
    return {
        type: PUSH_DATABASE,
        name
    }
}

const fetchDatabases = () => {
    return Connector.raw('show databases')
}

export const getDatabases = () => {
    return dispatch => {
        return fetchDatabases().then(
            databases => databases[0].map(database => {
                dispatch(pushDatabase(database.Database))
            }),
            error => console.error(error)
        )
    }
}
