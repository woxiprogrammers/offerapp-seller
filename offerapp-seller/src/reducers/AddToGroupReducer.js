import {
    ADD_TO_GROUP_REQUEST,
    ADD_TO_GROUP_SUCCESS,
    ADD_TO_GROUP_FAILURE,
    RENDER_GROUP_LIST_REQUEST,
    RENDER_GROUP_LIST_SUCCESS,
    RENDER_GROUP_LIST_FAILURE,
    GROUP_ID_CHANGE,
    MOBILE_NUMBER_CHANGE
} from '../constants';

const INITIAL_STATE = {
    select_groups: [],
    group_id: '',
    mobile_no: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RENDER_GROUP_LIST_REQUEST:
            return {
                ...state,
            }
        
            case RENDER_GROUP_LIST_SUCCESS:
            return {
                ...state,
                select_groups: action.select_groups,
                group_id: action.select_groups[0].group_id
            }
        
            case RENDER_GROUP_LIST_FAILURE:
            return {
                ...state,
            }
        
            case GROUP_ID_CHANGE:
            return {
                ...state,
                group_id: action.payload
            }
            
            case MOBILE_NUMBER_CHANGE:
            console.log(action.payload)
            return{
                ...state,
                mobile_no: action.payload
            }

            case ADD_TO_GROUP_SUCCESS:
            return{
                ...state,
            }

            case ADD_TO_GROUP_FAILURE:
            return{
                ...state,
            }
            default:
            return state;
    }
}