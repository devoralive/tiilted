import { PUSH_TABLE, SELECT_TABLE, RESET_TABLES } from './../actions/table'

const tables = (state = [], action) => {
    switch (action.type) {
        case RESET_TABLES:
            return []
        case PUSH_TABLE:
            return [
                ...state,
                { name: action.name, selected: false }
            ]
        case SELECT_TABLE:
            return state.map(db => {
                db.selected = false
                if (db.name === action.name) { db.selected = true }
                return db
            })
        default:
            return state
    }
}

export default tables
