import { connect } from 'react-redux'

import TableList from './table-list'

const mapStateToProps = (state) => {
  return {
    tables: state.tables
  }
}

const TableContainer = connect(
  mapStateToProps
)(TableList)

export default TableContainer
