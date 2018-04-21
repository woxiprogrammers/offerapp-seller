import axios from 'axios';
import {
    OFFER_LISTED,
    OFFER_NOT_LISTED,
    OFFER_STATUS,
    baseUrl
} from '../constants';

export const offerList = ({
    token,
    status,
    page 
}) => {
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
        offer_list
        //   listingViewCategoryOffers: records,
        //   pagination
    };
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