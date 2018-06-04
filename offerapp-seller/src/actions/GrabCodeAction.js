import {
    GRAB_CODE_REQUEST,
    GRAB_CODE_SUCCESS,
    GRAB_CODE_FAIURE,
    GRAB_CODE_CHANGED,
    baseUrl
} from '../constants';
import {axios } from 'axios';
export const verifyGrabCode = ({ token, grab_code }) => {
    return(dispatch)=>{
        dispatch({type: GRAB_CODE_REQUEST});
        axios({
            url:`${baseUrl}/seller/offer/check-grab-code?token=${token}`,
            method: 'post',
            data: {
                token,
                grab_code
            } 
        }).then(async(response)=>{
            var status = response.status;
            if(status === 200){
                dispatch(grabCodeVerified());
            }
        }).catch((error)=>{
            console.log(error);
            dispatch(grabCodeVerificationFail());
        })
    }
}

export const grabCodeVerified = () => {
    return{
        type: GRAB_CODE_SUCCESS
    }
}

export const grabCodeVerificationFail = () => {
    return{
        type: GRAB_CODE_FAIURE
    }
}

export const getGrabCode =( text) =>{
    return{
        type: GRAB_CODE_CHANGED,
        payload: text
    }
}