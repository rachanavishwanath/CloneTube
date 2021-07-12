import React from 'react';
import {connect} from 'react-redux';
import TopNavBar from './top_navbar';
import {login, logout, signUp} from '../../../actions/user_actions'
const mSTP = state => {
  return {
    state
  }
}

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signUp: user => dispatch(signUp(user))
  }
}

export default connect(mSTP, mDTP)(TopNavBar);
