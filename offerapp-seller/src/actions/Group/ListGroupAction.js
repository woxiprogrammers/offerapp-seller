import axios from 'axios';
import {
    GROUP_LIST_SUCCESS,
    GROUP_LIST_FAILURE,
    GROUP_LIST_REQUEST,
    baseUrl
} from '../../constants';
import { Alert } from 'react-native';

export const getListOfGroup = ({ token }) => {
    return (dispatch) => {
        dispatch({ type: GROUP_LIST_REQUEST });
        axios({
            url: `${baseUrl}/seller/group/list?token=${token}`,
            method: 'get',
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(groupListedSuccess(response.data.data));
            } else if (status === 500) {
                Alert.alert("Group list not recieved please try again");
                dispatch(groupListFailure());
            }
        }).catch((error) => {
            console.log(error);
            dispatch(groupListFailure());
        });
    }
};
export const groupListedSuccess = (response) => {
    const { select_groups } = response;
    return {
        type: GROUP_LIST_SUCCESS,
        select_groups 
    };
};
export const groupListFailure = () => {
    return {
        type: GROUP_LIST_FAILURE,
    };
};