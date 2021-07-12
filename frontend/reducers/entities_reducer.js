import {combineReducers} from 'redux';
import SessionReducer from '../reducers/session_reducer';

export default combineReducers({
  session: SessionReducer
})
