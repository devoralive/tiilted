import React from 'react'
import { TableRow } from 'reactstrap'
import { connect } from 'react-redux'
import { selectDatabase } from './../../actions/database'


const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(selectDatabase(props.name))
    }
  }
}

const Database = ({ name, onClick }) => (
  <li>
    <div onClick={onClick} className="database-name">{name}</div>
  </li>
)

const DatabaseContainer = connect(
  null,
  mapDispatchToProps
)(Database)

export default DatabaseContainer
