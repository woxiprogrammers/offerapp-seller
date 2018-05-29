import {
    OFFER_LISTED,
    OFFER_LISTED_ALL,
    OFFER_LISTED_APPROVE,
    OFFER_LISTED_DISAPPROVE,
    OFFER_LISTED_EXPIRE,
    OFFER_LISTED_PENDING,
    OFFER_NOT_LISTED,
    OFFER_LIST_REQUEST,
    OFFER_STATUS,
    NO_OFFERS
} from '../constants'

const INITIAL_STATE = {
    offer_list_all: [],
    offer_list_approved: [],
    offer_list_disapproved: [],
    offer_list_expired: [],
    offer_list_pending: [],
    status: '',
    isLoading: false,
    pagination_all: { page: 1 },
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NO_OFFERS:
            return {
                ...state,
                isLoading: false
            }
        case OFFER_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case OFFER_NOT_LISTED:
            return {
                ...state,
                isLoading: false
            };

        case OFFER_LISTED_ALL:
            const { offer_list = [] } = action;
            // console.log('Calling Offer List Reducers !!!!');
            // console.log(state.offer_list_all);
            return {
                ...state,
                offer_list_all: [
                    ...state.offer_list_all,
                    ...offer_list
                  ],
                pagination_all: {
                ...action.pagination,
                },
                isLoading: false

            };

        case OFFER_LISTED_PENDING:
            return {
                ...state,
                offer_list_pending: action.offer_list,
                isLoading: false
            };

        case OFFER_LISTED_APPROVE:
            return {
                ...state,
                offer_list_approved: action.offer_list,
                isLoading: false
            };

        case OFFER_LISTED_DISAPPROVE:
            return {
                ...state,
                offer_list_disapproved: action.offer_list,
                isLoading: false
            };

        case OFFER_LISTED_EXPIRE:
            return {
                ...state,
                offer_list_expired: action.offer_list,
                isLoading: false
            };
        case OFFER_STATUS:
            return {
                ...state,
                status: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}