import {
    OFFER_DETAIL_REQUEST,
    OFFER_DETAIL_SUCCESS,
    OFFER_DETAIL_FAILURE,
    I_AM_INTRESTED_LIST_REQUEST,
    I_AM_INTRESTED_LIST_SUCCESS,
    I_AM_INTRESTED_LIST_FAILURE,
    baseUrl
} from '../../constants'
import { Alert } from 'react-native';
import axios from 'axios';

// request for offer detail
export const requestOfferDetails = ({ token, getOffer_id }) => {
    return (dispatch) => {
        dispatch({ type: OFFER_DETAIL_REQUEST });
        axios({
            url: `${baseUrl}/seller/offer/detail?token=${token}`,
            method: 'post',
            data: {
                token,
                offer_id: getOffer_id
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                console.log(response.data.data)
                dispatch(offerDetailSuccess(response.data.data))
            }
        }).catch((error) => {
            // Alert.alert("ERROR");
            dispatch(offerDetailFailure());
        });
    }
}

export const offerDetailSuccess = (response) => {
    const { offer_detail } = response
    return {
        type: OFFER_DETAIL_SUCCESS,
        offer_detail
    };
};

export const offerDetailFailure = () => {
    return {
        type: OFFER_DETAIL_FAILURE
    };
};

export const iAmIntrestedListRequest = ({ token, getOffer_id }) => {
    // export const iAmIntrestedListRequest = () => {
    return (dispatch) => {
        dispatch({ type: I_AM_INTRESTED_LIST_REQUEST });
        axios({
            url: `${baseUrl}/seller/offer/interested-listing?token=${token}`,
            method: 'post',
            data: {
                offer_id: getOffer_id
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(iAmIntrestedListSuccess(response.data.data));
            }
        }).catch((error) => {
            console.log(error)
            // Alert.alert("ERROR");
            dispatch(iAmIntrestedListFailure());
        })
    }
}

export const iAmIntrestedListSuccess = (response) => {
    const { customer_data } = response;
    return {
        type: I_AM_INTRESTED_LIST_SUCCESS,
        customer_data
    }
}

export const iAmIntrestedListFailure = () => {
    return {
        type: I_AM_INTRESTED_LIST_FAILURE
    }
}