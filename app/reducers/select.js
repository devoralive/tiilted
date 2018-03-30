import { PUSH_RESULT, RESET_RESULTS, UPDATE_RESULT, PUSH_DESC } from './../actions/select'

const defaultValue = {
    desc: [],
    results: [],
    count: 0
}

const result = (state= {}, action) => {
    switch (action.type) {
        case PUSH_RESULT:
            return {
                ...action.payload,
                is_dirty: false
            }
        case UPDATE_RESULT:
            if (action.id === state.id) {
                const newState = {
                    ...state,
                    is_dirty: true
                }
                newState[action.key] = action.value

                return newState
            }
            return state
        default:
            return state
    }
}

const select = (state = defaultValue, action) => {
    switch (action.type) {
        case RESET_RESULTS:
            return defaultValue
        case PUSH_RESULT:
            return {
                ...state,
                results: [
                    ...state.results,
                    result(undefined, action)
                ],
                count: state.count + 1
            }
        case UPDATE_RESULT:
            return {
                ...state,
                results: state.result.map(resultState => (result(resultState, action)}))
            }
        case PUSH_DESC:
            return {
                desc: state.payload,
                ...state
            }
        default:
            return state
    }
}

export default select
