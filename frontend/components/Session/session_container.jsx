import React from 'react';
import Session from './session';
import { connect } from 'react-redux';
import {signUp, login, logout} from '../../actions/user_actions';
const mSTP = state => {
  return {
    state
  }
}

const mDTP = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
  }
}

export default connect(mSTP, mDTP)(Session);

