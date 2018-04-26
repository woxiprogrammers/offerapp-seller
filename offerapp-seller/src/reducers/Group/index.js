import { combineReducers } from 'redux';
import CreateGroupReducer from './CreateGroupReducer';
import ListGroupReducer from './ListGroupReducer';
import GroupmemberReducer from './GroupMemberReducer';
export default combineReducers({
    createGroup: CreateGroupReducer,
    listGroup: ListGroupReducer,
    groupMember: GroupmemberReducer
  });