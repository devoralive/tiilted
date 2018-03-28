import { PUSH_DATABASE } from './../actions/database'

const Database = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case PUSH_DATABASE:
            return [
                ...state,
                { name: action.name }
            ]
        default:
            return state
    }
}

export default Database
