import { connect } from 'react-redux'

import Table from './table'
import { selectTable } from './../../../../actions/table'

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(selectTable(props.name))
    }
  }
}

const TableContainer = connect(
  undefined,
  mapDispatchToProps
)(Table)

export default TableContainer
