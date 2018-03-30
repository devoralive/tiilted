
export const PUSH_RESULT = Symbol('@@select/PUSH_RESULT')
export const pushResult = (result) => {
    return {
        type: PUSH_RESULT
        payload: result
    }
}

export const RESET_RESULTS = Symbol('@@select/RESET_RESULTS')
export const resetResult = () => {
    return {
        type: RESET_RESULTS
    }
}

export const UPDATE_RESULT = Symbol('@@select/UPDATE_RESULT')
export const updateResult = (key, value) => {
    return {
        type: UPDATE_RESULT
        key,
        value
    }
}

export const PUSH_DESC = Symbol('@@select/PUSH_DESC')
export const pushDesc = (data) => {
    return {
        type: PUSH_DESC
        payload: data
    }
}
