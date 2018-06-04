import {
    GROUP_OFFERS_REQUEST,
    GROUP_OFFERS_SUCCESS,
    GROUP_OFFERS_FAILURE,
    baseUrl
} from '../../constants';
import axios from 'axios';
import {
    Alert
} from 'react-native';

export const requestGroupOffers = ({
    token,
    getGroup_id
}) => {
    return (dispatch) => {
        dispatch({ type: GROUP_OFFERS_REQUEST });
        axios({
            url: `${baseUrl}/seller/group/offers?token=${token}`,
            method: 'post',
            data: {
                group_id: getGroup_id
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(groupOfferRecieved(response.data.data));
                console.log("in ASYNC")
                console.log(response.data.data)
            }
        }).catch((error) => {
            console.log(error);
            dispatch(groupOfferNotRecieved());
            // Alert.alert("ERROR");
        })
    }
}

export const groupOfferRecieved = (response) => {
    const { group_offers } = response;
    console.log("in Action")
    console.log(group_offers)
    return {
        type: GROUP_OFFERS_SUCCESS,
        group_offers
    }
}

export const groupOfferNotRecieved = () => {
    return {
        type: GROUP_OFFERS_FAILURE
    }
}