import {
    GROUP_OFFERS_REQUEST,
    GROUP_OFFERS_SUCCESS,
    GROUP_OFFERS_FAILURE,
    GROUP_LIST_FAILURE,
} from '../../constants'

const INITIAL_STATE = {
    group_offers: [],
    isLoading: false,
    pagination: { page:1 }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GROUP_OFFERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case GROUP_OFFERS_SUCCESS:
            console.log("in REDUCER")
            console.log(action.group_offers)
            return {
                ...state,
                isLoading: false,
                group_offers: action.group_offers
            }

        case GROUP_OFFERS_FAILURE:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}