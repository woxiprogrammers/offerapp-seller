import {
    ACC_INFO_REQUEST,
    ACC_INFO_SUCCESS,
    ACC_INFO_FAILURE,
    ACC_INFO_EDIT_REQUEST,
    ACC_INFO_EDIT_SUCCESS,
    ACC_INFO_EDIT_FAILURE,
    GET_FLOOR_REQUEST,
    GET_FLOOR_SUCCESS,
    GET_FLOOR_FAILURE,
    FLOOR_CHANGE,
    SHOP_NAME_CHANGE,
    FIRST_NAME_CHANGE,
    LAST_NAME_CHANGE,
    MOBILE_NO_CHANGE,
    LANDLINE_NO_CHANGE,
    ADDRESS_CHANGE,
    ZIP_CODE_CHANGE,
    CITY_CHANGE,
    STATE_CHANGE,
} from '../constants';

const INITTILA_STATE = {
    floors: [],
    isloading: false,
    id: '',
    account_detail: [],
    shop_name: '',
    first_name: '',
    last_name: '',
    landline: '',
    stateInIndia: '',
    city: '',
    zipcode: '',
    address: ''
}

export default (state = INITTILA_STATE, action) => {
    switch (action.type) {
        case GET_FLOOR_REQUEST:
            return {
                ...state,
                isloading: true
            }

        case GET_FLOOR_SUCCESS:
            return {
                ...state,
                isloading: false,
                floors: action.floors,
                id: action.floors[0].id,
            }

        case GET_FLOOR_FAILURE:
            return {
                ...state
            }

        case FLOOR_CHANGE:
            return{
                ...state,
                id: action.payload
            }

        case ACC_INFO_REQUEST:
        return{
            ...state,
            isloading: true,
        }

        case ACC_INFO_SUCCESS:
        return{
            ...state,
            isloading: false,
            account_detail: action.account_detail,
            shop_name: action.account_detail.shop_name,
            first_name: action.account_detail.first_name,
            last_name: action.account_detail.last_name,
            landline: action.account_detail.landline,
            zipcode: action.account_detail.zipcode,
            city: action.account_detail.city,
            stateInIndia: action.account_detail.state,
            address: action.account_detail.address,
            id: action.account_detail.floor_id
        }

        case ACC_INFO_FAILURE:
        return{
            ...state
        }

        case SHOP_NAME_CHANGE:
        return{
            ...state,
            shop_name: action.payload
        }

        case FIRST_NAME_CHANGE:
        return{
            ...state,
            first_name: action.payload
        }

        case LAST_NAME_CHANGE:
        return{
            ...state,
            last_name: action.payload
        }

        case LANDLINE_NO_CHANGE:
        return{
            ...state,
            landline: action.payload
        }

        case CITY_CHANGE:
        return{
            ...state,
            city: action.payload
        }

        case STATE_CHANGE:
        return{
            ...state,
            stateInIndia: action.payload
        }

        case CITY_CHANGE:
        return{
            ...state,
            city: action.payload
        }

        case ACC_INFO_EDIT_REQUEST:
        return{
            ...state,
            isloading: true
        }

        case ACC_INFO_EDIT_SUCCESS:
        return{
            ...state,
            isloading: false
        }

        case ACC_INFO_EDIT_FAILURE:
        return{
            ...state,
            isloading: false
        }
        default:
            return state
    }
} 