import { TOGGLE_ACCORDION_DATABASE } from './../actions/database'

const defaultState = {
  accordionDatabaseOpen: true
}

const App = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_ACCORDION_DATABASE:
          return Object.assign({}, state, {
            accordionDatabaseOpen: !state.accordionDatabaseOpen
          })
        default:
            return state
    }
}

export default App
