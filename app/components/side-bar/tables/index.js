import { connect } from 'react-redux'

import Tables from './tables'

const mapStateToProps = (state) => {
  return {
    tables: state.tables
  }
}

const TablesContainer = connect(
  mapStateToProps
)(Tables)

export default TablesContainer
