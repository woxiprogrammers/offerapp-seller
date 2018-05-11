import axios from 'axios';
import {
    GROUP_DETAIL_SUCCESS,
    GROUP_DETAIL_FAILURE,
    GROUP_DETAIL_REQUEST,
    baseUrl
} from '../../constants';
import { Alert } from 'react-native';

export const getDetailOfGroup = ({ token, getGroup_id }) => {
    return (dispatch) => {
        dispatch({ type: GROUP_DETAIL_REQUEST });
        axios({
            url: `${baseUrl}/seller/group/detail?token=${token}`,
            method: 'post',
            data:{
                token,
                group_id: getGroup_id
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(groupDetailSuccess(response.data.data));
            } else if (status === 500) {
                Alert.alert("Member List not recieved please try again");
                dispatch(groupDetailFailure());
            }
        }).catch((error) => {
            console.log(error);
            dispatch(groupDetailFailure());
        });
    }
};
export const groupDetailSuccess = (response) => {
    const { group_details } = response;
    return {
        type: GROUP_DETAIL_SUCCESS,
        group_details 
    };
};
export const groupDetailFailure = () => {
    return {
        type: GROUP_DETAIL_FAILURE,
    };
};