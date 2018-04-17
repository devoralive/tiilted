import { connect } from 'react-redux'

import DatabaseRow from './database-row.jsx'
import { selectDatabase } from './../../../../actions/database'

const mapStateToProps = (state) => {
  return {
    accordionOpen: state.app.accordionDatabaseOpen
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(selectDatabase(props.name))
    }
  }
}

const DatabaseRowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseRow)

export default DatabaseRowContainer
