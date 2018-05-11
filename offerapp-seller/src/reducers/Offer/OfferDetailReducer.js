import {
    OFFER_DETAIL_REQUEST,
    OFFER_DETAIL_SUCCESS,
    OFFER_DETAIL_FAILURE,
    I_AM_INTRESTED_LIST_REQUEST,
    I_AM_INTRESTED_LIST_SUCCESS,
    I_AM_INTRESTED_LIST_FAILURE,
} from '../../constants';

const INITIAL_STATE = {
    offer_detail: [],
    customer_data: [],
    isloading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case OFFER_DETAIL_REQUEST:
            return {
                ...state
            }

        case OFFER_DETAIL_SUCCESS:
            return {
                ...state,
                offer_detail: action.offer_detail
            }

        case OFFER_DETAIL_FAILURE:
            return {
                ...state
            }
       
            case I_AM_INTRESTED_LIST_REQUEST:
            return {
                ...state,
                isloading: true
            }
       
            case I_AM_INTRESTED_LIST_SUCCESS:
            return {
                ...state,
                customer_data: action.customer_data,
                isloading: false
            }
        
            case I_AM_INTRESTED_LIST_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
}