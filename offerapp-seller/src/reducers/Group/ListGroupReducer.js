import {
    GROUP_LIST_SUCCESS,
    GROUP_LIST_FAILURE,
    GROUP_LIST_REQUEST
} from '../../constants/Group/GroupListingTypes'

const INITIAL_STATE = {
    select_group: [],
    isLoading: false,
    pagination: { page:1 }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GROUP_LIST_SUCCESS:
        const { select_group = [] } = action;
        return {
                ...state,
                isLoading:false,
                select_group: [
                    ...state.select_group,
                    ...select_group
                ],
                pagination: {
                    ...action.pagination,
                },
            }

        case GROUP_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case GROUP_LIST_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        default:
            return state;
    }
}