import {
    GRAB_CODE_REQUEST,
    GRAB_CODE_SUCCESS,
    GRAB_CODE_FAIURE,
    GRAB_CODE_CHANGED,
    baseUrl
} from '../constants';
import axios from 'axios';
import {
    Alert
} from 'react-native';
export const verifyGrabCodeRequest = ({ token, grab_code }) => {
    return (dispatch) => {
        dispatch({ type: GRAB_CODE_REQUEST });
        axios({
            url: `${baseUrl}/seller/offer/check-grab-code?token=${token}`,
            method: 'post',
            data: {
                token,
                offer_code: grab_code
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                console.log(response.data)
                dispatch(grabCodeVerified(response.data));
            }
        }).catch((error) => {
            console.log(error);
            dispatch(grabCodeVerificationFail());
        })
    }
}

export const grabCodeVerified = (response) => {
    const { message } = response;
    Alert.alert(message);
    return {
        type: GRAB_CODE_SUCCESS
    }
}

export const grabCodeVerificationFail = () => {
    return {
        type: GRAB_CODE_FAIURE
    }
}

export const getGrabCode = (text) => {
    return {
        type: GRAB_CODE_CHANGED,
        payload: text
    }
}