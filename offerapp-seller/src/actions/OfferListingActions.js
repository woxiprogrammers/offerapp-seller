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
    baseUrl
} from '../constants';


export const offerList = ({
    token,
    status,
    page }) => {
    console.log("fetching offerlist");
    console.log(`${baseUrl}/seller/offer/listing?token=${token}`);

    return (dispatch) => {
        dispatch({ type: OFFER_LISTED });
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
            } else {
                console.log("Lisitng not recieved")
            }
        })
    }
};
export const getOfferListSuccess = (response) => {
    console.log('Success Offers :')
    console.log(response);
    const { offer_list } = response;
    return {
        type: OFFER_LISTED,
        offer_list: offer_list
    };
    // if (response.offer_status_slug === 'all') {
    //     return {
    //         type: OFFER_LISTED_ALL,
    //         offer_list_all: offer_list
    //     };
    // } else if (response.offer_status_slug === 'approved') {
    //     return {
    //         type: OFFER_LISTED_APPROVE,
    //         offer_list_approve: offer_list
    //     }
    // } else if (response.offer_status_slug === 'disapproved') {
    //     return {
    //         type: OFFER_LISTED_DISAPPROVE,
    //         offer_list_disapprove: offer_list
    //     }
    // }else if (response.offer_status_slug === 'expired') {
    //     return {
    //         type: OFFER_LISTED_EXPIRE,
    //         offer_list_expire: offer_list
    //     }
    // }else if (response.offer_status_slug === 'pending') {
    //     return {
    //         type: OFFER_LISTED_PENDING,
    //         offer_list_pending: offer_list
    //     }
    // }

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
        offer_list
    });
}

