import { combineReducers } from 'redux';
import Captions from './caption';
import Notifications from './notification';
import Tags from './tag';

const rootReducer = combineReducers({
  Captions,
  Notifications,
  Tags
});

export default rootReducer;
