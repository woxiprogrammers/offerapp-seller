import { combineReducers } from 'redux';
import CreateGroupReducer from './CreateGroupReducer';
import ListGroupReducer from './ListGroupReducer';
export default combineReducers({
    createGroup: CreateGroupReducer,
    listGroup: ListGroupReducer
  });