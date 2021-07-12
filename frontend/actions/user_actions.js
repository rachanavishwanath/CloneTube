import * as userApiUtil from '../util/user_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const login = user => dispatch => {
  return userApiUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user))
  },then(errors => {
    return dispatch(receiveSessionErrors(errors.JSONResponse))
  }))
};

export const logout = () => dispatch => {
  return userApiUtil.logout().then(() => {
    return dispatch(logoutUser())
  },then(errors => {
    return dispatch(receiveSessionErrors(errors.JSONResponse))
  }))
};

export const signUp = user => dispatch => {
  return userApiUtil.createUser(user).then(user => {
    return dispatch(receiveCurrentUser(user))
  },then(errors => {
    return dispatch(receiveSessionErrors(errors.JSONResponse))
  }))
};
