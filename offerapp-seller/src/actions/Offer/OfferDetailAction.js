import {
    OFFER_DETAIL_REQUEST,
    OFFER_DETAIL_SUCCESS,
    OFFER_DETAIL_FAILURE,
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
            console.log(status)
            if (status === 200) {
                dispatch(offerDetailSuccess(response.data.data));
                Alert.alert("offerDetail recieved");
                console.log("OFFER DETAIL RECIEVED")
                console.log(response.data.data)
            }
        }).catch((error) => {
            console.log(error)
            Alert.alert("ERROR");
            dispatch(offerDetailFailure());
        });
    }
}

export const offerDetailSuccess = (response) => {
    
    return {
        type: OFFER_DETAIL_SUCCESS,
        offer_detail: response
    };
};

export const offerDetailFailure = () => {
    return {
        type: OFFER_DETAIL_FAILURE
    };
};