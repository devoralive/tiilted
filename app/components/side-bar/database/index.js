import { connect } from 'react-redux'

import Database from './database'
import { selectDatabase } from './../../../actions/database'

const mapDispatchToProps = (dispatch, props) => {
    console.log(props);
  return {
    onClick: () => {
      dispatch(selectDatabase(props.name))
    }
  }
}

const DatabaseContainer = connect(
  null,
  mapDispatchToProps
)(Database)

export default DatabaseContainer
