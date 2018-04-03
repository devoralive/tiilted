import { connect } from 'react-redux'

import DatabaseRow from './database-row.jsx'
import { selectDatabase } from './../../../../actions/database'

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(selectDatabase(props.name))
    }
  }
}

const DatabaseRowContainer = connect(
  null,
  mapDispatchToProps
)(DatabaseRow)

export default DatabaseRowContainer
