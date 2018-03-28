import { connect } from 'react-redux'
import SideBar from './side-bar.jsx'

const mapStateToProps = (state) => {
  return {
    databases: state.databases
  }
}

const SideBarContainer = connect(
  mapStateToProps
)(SideBar)

export default SideBarContainer