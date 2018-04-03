import { connect } from 'react-redux'

import Header from './header'

const mapStateToProps = (state) => {
  console.log(state.select)
  return {
    columns: state.select.columns
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer
