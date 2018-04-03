import { connect } from 'react-redux'
import Rows from './rows'

const mapStateToProps = state => {
  return {
    columns: state.rows.columns,
    rows: state.rows.rows
  }
}

const RowsContainer = connect(
  mapStateToProps
)(Rows)

export default RowsContainer
