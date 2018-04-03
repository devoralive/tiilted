import connect from './../connectors'

export const PUSH_RESULT = Symbol('@@select/PUSH_RESULT')
export const pushResult = (result) => {
    return {
        type: PUSH_RESULT,
        payload: result
    }
}

export const RESET_RESULTS = Symbol('@@select/RESET_RESULTS')
const resetResults = () => {
    return {
        type: RESET_RESULTS
    }
}

export const UPDATE_RESULT = Symbol('@@select/UPDATE_RESULT')
export const updateResult = (key, value) => {
    return {
        type: UPDATE_RESULT,
        key,
        value
    }
}

export const PUSH_COLUMNS = Symbol('@@select/PUSH_COLUMNS')
const pushColumns = (data) => {
    return {
        type: PUSH_COLUMNS,
        column: data
    }
}

const fetchColumns = (tableName) => {
    return connect().raw(`desc ${tableName}`)
}

const fetchData = (tableName) => {
    return connect().raw(`SELECT * FROM ${tableName} LIMIT 20`)
}

const getColumns = (tableName) => {
    return dispatch => {
        return fetchColumns(tableName).then(
            columns =>  columns[0].map(column => {
                dispatch(pushColumns(column.Field))
            }),
            err => { console.error(err) }
        )
    }
}

const getSelect = (tableName) => {
    return dispatch => {
        return fetchData(tableName).then(
            rows => rows[0].map(row => {
                dispatch(pushResult(row))
            }),
            err => { console.error(err) }
        )
    }
}

export const getData = (tableName) => {
    return dispatch => {
        dispatch(resetResults())
        dispatch(getColumns(tableName))
        dispatch(getSelect(tableName))
    }
}
