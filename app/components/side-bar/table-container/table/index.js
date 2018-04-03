import { connect } from 'react-redux'
import Table from './table'
import { selectTable } from './../../../../actions/table'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectTable(ownProps.name))
    }
  }
}

const TableContainer = connect(
  undefined,
  mapDispatchToProps
)(Table)

export default TableContainer