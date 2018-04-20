import axios from 'axios';
import {
    OFFER_LISTED,
    OFFER_NOT_LISTED,
    OFFER_STATUS,
    baseUrl
} from '../constants';

export const offerList = ({ status }) => {
    console.log("fetching offerlist");
    return (dispatch) => {
        dispatch({ type: OFFER_LISTED });
        const url = `${baseUrl}` + "/seller/offer/listing?token=" + `${token}`;
        axios.post(url, {
            status_slug: status
        }).then(async (response) => {
            const status = response.message;
            if (status === "Success") {
                console.log("Lisiting recieved")
                console.log(reponse.data)
                const data = response.data

            }
        })
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
        offer_list
    });
}