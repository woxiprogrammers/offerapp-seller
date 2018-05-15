import {
    RENDER_GROUP_LIST_REQUEST,
    RENDER_GROUP_LIST_SUCCESS,
    RENDER_GROUP_LIST_FAILURE,
    OFFER_LIST_REQUEST,
    OFFER_LIST_SUCCESS,
    OFFER_LIST_FAILURE,
    OFFER_ID_CHANGE,
    GROUP_ID_CHANGE,
    baseUrl
} from '../../constants'

const INITIAL_STATE = {
    offer_list: [],
    offer_id: '',
    select_groups: [],
    group_id: '',
    isLoading: false,
    status: 'approved'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OFFER_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case OFFER_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                offer_list: action.offer_list,
                offer_id: action.offer_list[0].offer_id
            }

        case OFFER_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case RENDER_GROUP_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case RENDER_GROUP_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                select_groups: action.select_groups,
                group_id: action.select_groups[0].group_id
            }

        case RENDER_GROUP_LIST_FAILURE:
            return {
                ...state,
                isLoading: false
            }

            case GROUP_ID_CHANGE:
            return {
                ...state,
                group_id: action.payload
            }
            
        default:
            return state
    }
}