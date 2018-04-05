import { connect } from 'react-redux'
import TableRow from './table-row.jsx'
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
)(TableRow)

export default TableContainer