import axios from 'axios';
import {
    CREATE_GROUP_REQUEST,
    CREATE_GROUP_SUCCESS,
    CREATE_GROUP_FAILURE,
    GROUP_NAME_CHANGE,
    GROUP_DESC_CHANGE,
    baseUrl
} from '../../constants';
import { Alert } from 'react-native';

export const createGroup = ({
    groupName,
    groupDescription,
    token }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_GROUP_REQUEST });
        axios({
            url: `${baseUrl}/seller/group/create?token=${token}`,
            method: 'post',
            data: {
                group_name: groupName,
                description: groupDescription
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                Alert.alert("Group Created successfully");
                dispatch(groupCreatedSuccess(response.data.data));
            } else if (status === 500) {
                Alert.alert("Group not created");
                dispatch(groupCreatedFailure());
            }
        }).catch((error) => {
            Alert.alert("Group Name already exists");
            dispatch(groupCreatedFailure());
        });
    }
};
export const groupCreatedSuccess = (response) => {
    const { message } = response;
    return {
        type: CREATE_GROUP_SUCCESS,
        message
    };
};
export const groupCreatedFailure = () => {
    return {
        type: CREATE_GROUP_FAILURE,
    };
};

export const groupNameChanged = (text) => {
    return {
        type: GROUP_NAME_CHANGE,
        payload: text
    };
};

export const groupDescriptionChanged = (text) => {
    return {
        type: GROUP_DESC_CHANGE,
        payload: text
    };
};

