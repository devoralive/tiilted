import { connect } from 'react-redux'
import TableItem from './table'
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
)(TableItem)

export default TableContainer