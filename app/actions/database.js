import connect, { setConnection } from './../connectors'
import { getTables } from './table'

export const SELECT_DATABASE = Symbol('@@database/SELECT_DATABASE')
export const TOGGLE_ACCORDION_DATABASE = Symbol('@@database/TOGGLE_ACCORDION_DATABASE')
export const selectDatabase = name => {
    return dispatch => {
        setConnection(name)
        dispatch(getTables(name))
        dispatch({
            type: SELECT_DATABASE,
            name
        })
        dispatch({
            type: TOGGLE_ACCORDION_DATABASE
        })
    }
}

export const PUSH_DATABASE = Symbol('@@database/PUSH_DATABASE')
const pushDatabase = name => {
    return {
        type: PUSH_DATABASE,
        name
    }
}

const fetchDatabases = () => {
    return connect().raw('show databases')
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
