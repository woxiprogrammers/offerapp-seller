import { combineReducers } from 'redux';
import CreateGroupReducer from './CreateGroupReducer';
export default combineReducers({
    createGroup: CreateGroupReducer
  });