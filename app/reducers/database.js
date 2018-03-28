import { PUSH_DATABASE } from './../action/database'

const database = (state = [], {type, ...action}) => {
    switch (type) {
        case PUSH_DATABASE:
            return [
                ...state,
                {name: action.name}
            ]
        default:
            return state
    }
}

export default database
