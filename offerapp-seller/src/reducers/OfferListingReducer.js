import {
    OFFER_LISTED,
    OFFER_NOT_LISTED,
    OFFER_STATUS
} from '../constants'

const INITIAL_STATE = {
    offer_list: [],
    status: '',
  };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case OFFER_LISTED:
        return {
            ...state,
            offer_list: action.offer_list
        };
        case OFFER_NOT_LISTED:
        return {
            ...state
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