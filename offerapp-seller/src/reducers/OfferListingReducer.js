import {
    OFFER_LISTED,
    OFFER_LISTED_ALL,
    OFFER_LISTED_APPROVE,
    OFFER_LISTED_DISAPPROVE,
    OFFER_LISTED_EXPIRE,
    OFFER_LISTED_PENDING,
    OFFER_NOT_LISTED,
    OFFER_STATUS
} from '../constants'

const INITIAL_STATE = {
    offer_list: [],
    status: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OFFER_LISTED:
            return {
                ...state,
                offer_list: action.offer_list
            };

        case OFFER_LISTED_ALL:
            return {
                ...state,
                offer_list: action.offer_list
            };

        case OFFER_LISTED_APPROVE:
            return {
                ...state,
                offer_list: action.offer_list
            };

        case OFFER_LISTED_DISAPPROVE:
            return {
                ...state,
                offer_list: action.offer_list
            };

        case OFFER_LISTED_EXPIRE:
            return {
                ...state,
                offer_list: action.offer_list
            };
        case OFFER_STATUS:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}