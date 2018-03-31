import { connect } from 'react-redux'
import DatabaseList from './database-list.jsx'

const mapStateToProps = (state) => {
  return {
    databases: state.databases
  }
}

const DatabaseContainer = connect(
  mapStateToProps
)(DatabaseList)

export default DatabaseContainer