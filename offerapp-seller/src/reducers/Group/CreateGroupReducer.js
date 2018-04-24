import {
    CREATE_GROUP_REQUEST,
    CREATE_GROUP_SUCCESS,
    CREATE_GROUP_FAILURE,
    GROUP_NAME_CHANGE,
    GROUP_DESC_CHANGE
} from '../../constants'

const INITIAL_STATE = {
    message: "",
    groupName: "",
    groupDescription: "",
    createGroupLoading: false,
    createGroupError: false
  };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CREATE_GROUP_REQUEST: 
            return{
                ...state,
                createGroupLoading: true
            }
        case CREATE_GROUP_SUCCESS:
        return {
            ...state,
            ...INITIAL_STATE,
            message: action.message,
        };
        case CREATE_GROUP_FAILURE:
        return {
            ...state,
            ...INITIAL_STATE,
            createGroupLoading: false,
            createGroupError: true
        };
        case GROUP_NAME_CHANGE:{
        return {
            ...state,
            groupName: action.payload,
            createGroupError: false
        };
        }

        case GROUP_DESC_CHANGE:
        return {
            ...state,
            groupDescription: action.payload,
            createGroupError: false
        }
        default:
        return state;
    }
}