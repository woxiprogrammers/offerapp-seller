import {
    GROUP_LIST_SUCCESS,
    GROUP_LIST_FAILURE,
    GROUP_LIST_REQUEST
} from '../../constants/Group/GroupListingTypes'

const INITIAL_STATE = {
    select_groups: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GROUP_LIST_SUCCESS:
            return {
                ...state,
                select_groups: action.select_groups,
            }

        case GROUP_LIST_FAILURE:
            return {
                ...state,
                ...INITIAL_STATE,
            }
        case GROUP_LIST_REQUEST:
            return {
                ...state,
            }
        default:
            return state;
    }
}