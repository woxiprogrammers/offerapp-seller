import {
    RENDER_GROUP_LIST_REQUEST,
    RENDER_GROUP_LIST_SUCCESS,
    RENDER_GROUP_LIST_FAILURE,
    OFFER_LIST_REQUEST,
    OFFER_LIST_SUCCESS,
    OFFER_LIST_FAILURE,
    OFFER_ID_CHANGE,
    GROUP_ID_CHANGE,
    baseUrl
} from '../../constants'
import { Alert } from 'react-native';
import axios from 'axios';

export const requestOfferList = ({
    token,
    status,
    page }) => {
        console.log(`${baseUrl}/seller/offer/listing?token=${token}`)
    return (dispatch) => {
        dispatch({ type: OFFER_LIST_REQUEST });
        axios({
            url: `${baseUrl}/seller/offer/listing?token=${token}`,
            method: 'post',
            data: {
                status_slug: status
            }
        }).then(async (response) => {
            var success = response.data.message;
            if (success === "Success") {
                dispatch(getOfferListSuccess(response.data.data))
            }
        }).catch((error) => {
            Alert.alert("ERROR");
            console.log(error)
            dispatch(getOfferListFailure());
        })
    }
};

export const getOfferListSuccess = (response) => {
    const { offer_list } = response;
    return {
        type: OFFER_LIST_SUCCESS,
        offer_list
    };
}

export const getOfferListFailure = () => {
    return{
        type: OFFER_LIST_FAILURE
    }
}

export const selectedOfferTypeid = (text) => {
    return{
        type: OFFER_ID_CHANGE,
        payload: text
    }
}

export const requestGroupListToPromote = ({ token }) => {
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