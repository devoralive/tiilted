import { connect } from 'react-redux'

import Header from './header'

const mapStateToProps = (state) => {
  return {
    columns: state.rows.columns
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer
