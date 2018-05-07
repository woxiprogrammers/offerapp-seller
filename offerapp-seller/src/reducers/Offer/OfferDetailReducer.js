import {
    OFFER_DETAIL_REQUEST,
    OFFER_DETAIL_SUCCESS,
    OFFER_DETAIL_FAILURE,
} from '../../constants';

const INITIAL_STATE = {
    offer_detail : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case OFFER_DETAIL_REQUEST:
            return {
                ...state
            }
        case OFFER_DETAIL_SUCCESS:
            console.log("IN REDUCER offer details")
            console.log(action.offer_detail)
            return {
                ...state,
                offer_detail: action.offer_detail
            }

        case OFFER_DETAIL_FAILURE:
        return{
            ...state
        }

        default:
        return state;
    }
}