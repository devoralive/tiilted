import { connect } from 'react-redux'
import DatabaseList from './database-list.jsx'

const mapStateToProps = (state) => {
  return {
    databases: state.databases,
    accordionOpen: state.app.accordionDatabaseOpen
  }
}

const DatabaseListContainer = connect(
  mapStateToProps
)(DatabaseList)

export default DatabaseListContainer