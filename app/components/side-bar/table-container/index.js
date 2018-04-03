import { connect } from 'react-redux'

import TableList from './table-list'

const mapStateToProps = (state) => {
  return {
    tables: state.tables
  }
}

const TableListContainer = connect(
  mapStateToProps
)(TableList)

export default TableListContainer
