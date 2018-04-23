import {
    ADD_TO_GROUP,
    SELECT_GROUP
} from '../constants'

const INITIAL_STATE = {
    select_groups: [],
  };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SELECT_GROUP:
        return {
            ...state,
            select_groups: action.select_groups
        }
        default:
        return state;
    }
}