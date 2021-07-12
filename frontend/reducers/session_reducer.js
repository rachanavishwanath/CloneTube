import {RECEIVE_CURRENT_USER,LOGOUT_USER} from '../actions/user_actions';

const _nullSession = Object.freeze({
  id: null
})

export default (state=_nullSession,action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id:action.user.id};

    case LOGOUT_USER:
      return _nullSession;

    default:
      return state; 
  }
}
