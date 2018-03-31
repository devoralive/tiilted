import { connect } from 'react-redux'
import Header from './header'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    columns: state.select.columns
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer