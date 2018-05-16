import {
    RENDER_GROUP_LIST_REQUEST,
    RENDER_GROUP_LIST_SUCCESS,
    RENDER_GROUP_LIST_FAILURE,
    OFFER_LIST_REQUEST,
    OFFER_LIST_SUCCESS,
    OFFER_LIST_FAILURE,
    OFFER_ID_CHANGE,
    GROUP_ID_CHANGE,
    PROMOTE_OFFER_REQUEST,
    PROMOTE_OFFER_SUCCESS,
    PROMOTE_OFFER_FAILURE,
    GROUP_SELECTED,
    baseUrl
} from '../../constants'
import { Alert } from 'react-native';
import axios from 'axios';

export const requestOfferList = ({
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
                status_slug: 'approved'
            }
        }).then(async (response) => {
            var success = response.data.message;
            if (success === "Success") {
                dispatch(getOfferListSuccess(response.data.data))
            }
        }).catch((error) => {
            console.log(error)
            Alert.alert("ERROR IN OFFER LIST");
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
    return {
        type: OFFER_LIST_FAILURE
    }
}

export const selectedOfferTypeid = (text) => {
    return {
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
    return {
        type: GROUP_ID_CHANGE,
        payload: text
    }
}

export const seledtedGroups = (array) => {
    return{
        type: GROUP_SELECTED,
        payload: array
    }
}
export const requestPromoteOffer = ({
    token,
    offer_id,
    selected_group_id
}) => {
    return (dispatch) => {
        dispatch({ type: PROMOTE_OFFER_REQUEST });
        axios({
            url: `${baseUrl}/seller/group/promote?token=${token}`,
            method: 'post',
            data: {
                offer_id,
                group_id : selected_group_id
            }
        }).then(async(response)=>{
            var status = response.status;
            if(status === 200) {
                dispatch(offerPromotedSuccessfully());
                Alert.alert("OFFER PROMOTED SUCCESSFULLY !!!");
            }
        }). catch((error) => {
            console.log(error);
            dispatch(offerPromotedFailed())
        })
    }
}

export const offerPromotedSuccessfully =()=>{
    return{
        type: PROMOTE_OFFER_SUCCESS
    }
}

export const offerPromotedFailed =()=>{
    return{
        type: PROMOTE_OFFER_FAILURE
    }
}
