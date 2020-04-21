import { combineReducers } from 'redux';
import Captions from './caption';
import Notifications from './notification';

const rootReducer = combineReducers({
  Captions,
  Notifications
});

export default rootReducer;
