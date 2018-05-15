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
    baseUrl
} from '../constants';
import { Alert } from 'react-native';
import axios from 'axios';

export const requestFloor = ({ token }) => {
    return (dispatch) => {
        dispatch({ type: GET_FLOOR_REQUEST });
        axios({
            url: `${baseUrl}/seller/address/floors/listing?token=${token}`,
            method: 'get'
        }).then(async (response) => {
            var status = response.status;
            if (status == 200) {
                dispatch(floorRecieved(response.data.data));
            } else {
                Alert.alert("Floors not recieved")
            }
        }).catch((error) => {
            console.log(error)
            Alert.alert("ERROR")
            dispatch(floorsNotRecieved());
        })
    }
}

export const floorRecieved = (response) => {
    const { floors } = response;
    return {
        type: GET_FLOOR_SUCCESS,
        floors
    }
}

export const floorsNotRecieved = () => {
    return {
        type: GET_FLOOR_FAILURE
    }
}

export const floorChange = (text) => {
    return {
        type: FLOOR_CHANGE,
        payload: text
    }
}

export const requestAccInfo = ({ token }) => {
    return (dispatch) => {
        dispatch({ type: ACC_INFO_REQUEST });
        axios({
            url: `${baseUrl}/seller/account/info?token=${token}`,
            method: 'get'
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(requestAccInfoSuccess(response.data.data));
            }
        }).catch((error) => {
            console.log(error)
            Alert.alert("ERROR")
            dispatch(requestAccInfoFailure());
        })
    }
}

export const requestAccInfoSuccess = (response) => {
    const { account_detail } = response;
    return {
        type: ACC_INFO_SUCCESS,
        account_detail
    }
}

export const requestAccInfoFailure = () => {
    return {
        type: ACC_INFO_FAILURE
    }
}

export const shopNameChanged = (text) => {
    return {
        type: SHOP_NAME_CHANGE,
        payload: text
    }
}

export const firstNameChange = (text) => {
    return {
        type: FIRST_NAME_CHANGE,
        payload: text
    }
}

export const lastNameChange = (text) => {
    return {
        type: LAST_NAME_CHANGE,
        payload: text
    }
}

export const landLineChange = (text) => {
    return {
        type: LANDLINE_NO_CHANGE,
        payload: text
    }
}

export const mobileChange = (text) => {
    return {
        type: MOBILE_NO_CHANGE,
        payload: text
    }
}

export const addressChange = (text) => {
    return {
        type: ADDRESS_CHANGE,
        payload: text
    }
}

export const zipCodeChange = (text) => {
    return {
        type: ZIP_CODE_CHANGE,
        payload: text
    }
}

export const cityChange = (text) => {
    return {
        type: CITY_CHANGE,
        payload: text
    }
}

export const stateChange = (text) => {
    return {
        type: STATE_CHANGE,
        paylaod: text
    }
}

export const requestEditAccInfo = ({
    token,
    shop_name,
    first_name,
    last_name,
    landline,
    id,
    address,
    city,
    zipcode,
    stateInIndia
}) => {
    return (dispatch) => {
        dispatch({ type: ACC_INFO_EDIT_REQUEST });
        console.log("EDIT ACC INFO")
        console.log(`${baseUrl}/seller/account/edit?token=${token}`)
        axios({
            url: `${baseUrl}/seller/account/edit?token=${token}`,
            method: 'post',
            data: {
                shop_name,
                first_name,
                last_name,
                floor_id: id,
                address,
                landline,
                zipcode,
                city,
                state: stateInIndia,
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(editSuccess());
                Alert.alert("Account Information Edited Successfully");
            }
        }).catch((error) => {
            dispatch(editFail());
            console.log(error);
            Alert.alert("ERROR");
        })
    }
}

export const editSuccess = () => {
    return{
        type: ACC_INFO_EDIT_SUCCESS
    }
}

export const editFail = () => {
    return{
        type: ACC_INFO_EDIT_FAILURE
    }
}