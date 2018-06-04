import {
    GRAB_CODE_REQUEST,
    GRAB_CODE_SUCCESS,
    GRAB_CODE_FAIURE,
    GRAB_CODE_CHANGED,
} from '../constants';

const INITIAL_STATE = {
    isLoading: false,
    grab_code: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GRAB_CODE_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case GRAB_CODE_SUCCESS:
            return {
                ...state,
                isLoading: false
            }

        case GRAB_CODE_FAIURE:
            return {
                ...state,
                isLoading: fasle
            }
        case GRAB_CODE_CHANGED:
        return{
            ...state,
            grab_code: action.payload
        }
        default:
            return state
    }
} 