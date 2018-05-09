import {
    ADD_TO_GROUP_REQUEST,
    ADD_TO_GROUP_SUCCESS,
    ADD_TO_GROUP_FAILURE,
    RENDER_GROUP_LIST_REQUEST,
    RENDER_GROUP_LIST_SUCCESS,
    RENDER_GROUP_LIST_FAILURE,
    GROUP_ID_CHANGE,
    MOBILE_NUMBER_CHANGE,
    baseUrl
} from '../constants';
import { Alert } from 'react-native'
import axios from 'axios';

export const requestGroupList = ({ token }) => {
    return (dispatch) => {
        dispatch({ type: RENDER_GROUP_LIST_REQUEST });
        axios({
            url: `${baseUrl}/seller/group/list?token=${token}`,
            method: 'get',
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(rendergroupListSuccess(response.data.data));
            } else if (status === 500) {
                Alert.alert("Groups not listed");
                dispatch(rendergroupListFailure());
            }
        }).catch((error) => {
            console.log(error)
            dispatch(rendergroupListFailure());
        });
    }
}

export const rendergroupListSuccess = (response) => {
    const { select_groups } = response
    return {
        type: RENDER_GROUP_LIST_SUCCESS,
        select_groups
    }
}

export const rendergroupListFailure = () => {
    return {
        type: RENDER_GROUP_LIST_FAILURE
    }
}

export const selectedGroupid = (text) => {
    return{
        type: GROUP_ID_CHANGE,
        payload: text
    }
}

export const getMobileNumber = (text) => {
    return{
        type: MOBILE_NUMBER_CHANGE,
        payload: text
    }
}

export const requestAddToGroup =({token, group_id, mobile_no})=>{
    return(dispatch)=>{
        console.log(`${baseUrl}/seller/group/add-member?token=${token}`)
        dispatch({type: ADD_TO_GROUP_REQUEST});
        axios({
            url: `${baseUrl}/seller/group/add-member?token=${token}`,
            method: 'post',
            data:{
                group_id,
                mobile_no
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(addToGroupSuccess());
                Alert.alert("Member Added Succesfully");
            } else if (status === 500) {
                Alert.alert("Member Not Added");
                dispatch(addToGroupFailure());
            }
        }).catch((error) => {
            console.log(error)
            dispatch(addToGroupFailure());
        });
    }
}

export const addToGroupSuccess = () => {
    return{
        type: ADD_TO_GROUP_SUCCESS
    }
}

export const addToGroupFailure = () =>{
    return{
        type: ADD_TO_GROUP_FAILURE
    }
}