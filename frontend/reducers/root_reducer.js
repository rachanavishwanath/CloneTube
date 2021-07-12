import { combineReducers } from 'redux';
import entities_reducer from './entities_reducer';

export default combineReducers({
  entities: entities_reducer
})
