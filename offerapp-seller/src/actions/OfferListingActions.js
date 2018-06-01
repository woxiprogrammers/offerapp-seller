import axios from 'axios';
import {
    OFFER_LISTED,
    OFFER_LISTED_ALL,
    OFFER_LISTED_APPROVE,
    OFFER_LISTED_DISAPPROVE,
    OFFER_LISTED_EXPIRE,
    OFFER_NOT_LISTED,
    OFFER_STATUS,
    OFFER_LISTED_PENDING,
    OFFER_LIST_REQUEST,
    NO_OFFERS,
    baseUrl
} from '../constants';
import {
    Alert
} from 'react-native';

export const offerList = ({
    token,
    status,
    page
}) => {
    return (dispatch) => {
        dispatch({ type: OFFER_LIST_REQUEST });
        axios({
            url: `${baseUrl}/seller/offer/listing?token=${token}`,
            method: 'post',
            data: {
                status_slug: status,
                page
            }
        }).then(async (response) => {
            var success = response.status;
            if (success === 200) {
                dispatch(getOfferListSuccess(response.data.data));
            }
        }).catch((error) => {
            console.log(error);
            Alert.alert("ERROR");
            dispatch(getOfferfail());

        })
    }
};
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const getOfferfail = () => {
    return {
        type: OFFER_NOT_LISTED
    };
}
export const getOfferListSuccess = (response) => {
    if (response.status_slug === 'all') {
        const { offer_list, pagination } = response;
        if (isEmpty(offer_list)) {
            Alert.alert("No Offers");
            return {
                type: NO_OFFERS
            };

        } else {
            return {
                type: OFFER_LISTED_ALL,
                offer_list,
                pagination
            };
        }
    } else if (response.status_slug === 'pending') {
        const { offer_list, pagination } = response;
        if (isEmpty(offer_list)) {
            Alert.alert("No Offers");
            return {
                type: NO_OFFERS
            };

        } else {
            return {
                type: OFFER_LISTED_PENDING,
                offer_list,
                pagination
            };
        }
    } else if (response.status_slug === 'approved') {
        const { offer_list } = response;
        if (isEmpty(offer_list)) {
            Alert.alert("No Offers");
            return {
                type: NO_OFFERS
            };

        } else {
            return {
                type: OFFER_LISTED_APPROVE,
                offer_list
            };
        }
    } else if (response.status_slug === 'disapproved') {
        const { offer_list } = response;
        if (isEmpty(offer_list)) {
            Alert.alert("No Offers");
            return {
                type: NO_OFFERS
            };

        } else {
            return {
                type: OFFER_LISTED_DISAPPROVE,
                offer_list
            };
        }
    } else if (response.status_slug === 'expired') {
        const { offer_list } = response;
        if (isEmpty(offer_list)) {
            Alert.alert("No Offers");
            return {
                type: NO_OFFERS
            };

        } else {
            return {
                type: OFFER_LISTED_EXPIRE,
                offer_list
            };
        }
    }
};

export const offerStatus = (text) => {
    return {
        type: OFFER_STATUS,
        payload: text
    };
};

const offerListingSuccess = (dispatch, data) => {
    const { offer_list } = data;
    dispatch({
        type: OFFER_LISTED,
        offer_list,
    });
}

