import {
    GROUP_DETAIL_SUCCESS,
    GROUP_DETAIL_FAILURE,
    GROUP_DETAIL_REQUEST
} from '../../constants/Group/GroupMemberTypes'

const INITIAL_STATE = {
    group_details: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case GROUP_DETAIL_SUCCESS:
        console.log("IN REDUCER")
        console.log(action.group_details)
            return {
                ...state,
                group_details: action.group_details,
            }

        case GROUP_DETAIL_FAILURE:
            return {
                ...state,
                ...INITIAL_STATE,
            }
        case GROUP_DETAIL_REQUEST:
            return {
                ...state,
            }
        default:
            return state;
    }
}