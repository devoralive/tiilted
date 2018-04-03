import { PUSH_RESULT, RESET_RESULTS, UPDATE_RESULT, PUSH_COLUMNS } from './../actions/rows'

const defaultState = {
    columns: [],
    rows: [],
    count: 0
}

const defaultResult = {
    is_dirty: false
}

const result = (state = defaultResult, action) => {
    switch (action.type) {
        case PUSH_RESULT:
            return Object.assign({}, state, action.payload);
        case UPDATE_RESULT:
            if (action.id === state.id) {
                const newState = Object.assign({}, state, {
                    is_dirty: true
                })
                newState[action.key] = action.value

                return newState
            }
            return state
        default:
            return state
    }
}

const select = (state = defaultState, action) => {
    switch (action.type) {
        case RESET_RESULTS:
            return defaultState
        case PUSH_RESULT:
            return Object.assign({}, state, {
                rows: [
                    ...state.rows,
                    result(undefined, action)
                ],
                count: (state.count + 1)
            })
        case UPDATE_RESULT:
            return Object.assign({}, state, {
                results: state.result.map(resultState => (result(resultState, action)))
            })
        case PUSH_COLUMNS:
            return Object.assign({}, state, {
                columns: [
                    ...state.columns,
                    action.column
                ]
            })
        default:
            return state
    }
}

export default select
