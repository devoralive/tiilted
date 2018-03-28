import { PUSH_DATABASE, SELECT_DATABASE } from './../actions/database'

const Database = (state = [], action) => {
    switch (action.type) {
        case PUSH_DATABASE:
            return [
                ...state,
                { name: action.name, selected: false }
            ]
        case SELECT_DATABASE:
            return state.map(db => {
                db.selected = false
                if (db.name === action.name) {
                    db.selected = true
                }
                return db
            })
        default:
            return state
    }
}

export default Database
