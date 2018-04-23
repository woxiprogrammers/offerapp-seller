import axios from 'axios';
import {
    ADD_TO_GROUP,
    SELECT_GROUP,
    baseUrl
} from '../constants';


export const selectGroup = ({
    token }) => {
    console.log("fetching group list");
    console.log(`${baseUrl}/seller/group/list?token=${token}`);
    return (dispatch) => {
        dispatch({ type: SELECT_GROUP });
        axios({
            url: `${baseUrl}/seller/group/list?token=${token}`,
            method: 'get',
        }).then(async (response) => {
            var success = response.data.message;
            // console.log(response.data.data.)
            if (success === "Success") {
                dispatch(getSelectGroupSuccess(response.data.data))
            } else {
                console.log("Lisitng not recieved")
            }
        })
    }
};
export const getSelectGroupSuccess = (response) => {
    console.log('Success GROUP LIST in action:')
    console.log(response);
    const { select_groups } = response;
    return {
        type: SELECT_GROUP,
        select_groups
    };
};

export const mobileNumber = (text) => {
    return {
        type: ADD_TO_GROUP,
        payload: text
    };
};

const SelectGroupSuccess = (dispatch, data) => {
    const { select_groups } = data;
    dispatch({
        type: SELECT_GROUP,
        select_groups
    });
}

