import {
    OFFER_CREATE_REQUEST,
    OFFER_TYPE_REQUEST,
    OFFER_CATEGORY_REQUEST,
    OFFER_CREATE_SUCCESS,
    OFFER_CREATE_FAILURE,
    OFFER_TYPE_SUCCESS,
    OFFER_TYPE_FAILURE,
    OFFER_CATEGORY_SUCCESS,
    OFFER_CATEGORY_FAILURE,
    OFFER_START_DATE_CHANGE,
    OFFER_END_DATE_CHANGE,
    OFFER_DESCRIPTION_CHANGE,
    OFFER_IMAGE_UPLOAD,
    OFFER_SUB_CATEGORY_FAILURE,
    OFFER_SUB_CATEGORY_REQUEST,
    OFFER_SUB_CATEGORY_SUCCESS,
    OFFER_TYPE_ID_CHANGE,
    OFFER_CATEGORY_ID_CHANGE,
    OFFER_SUB_CATEGORY_ID_CHANGE,
    baseUrl
} from '../../constants'
import { Alert } from 'react-native';
import axios from 'axios';

// SELECT OFFER TYPE
export const selectOfferType = ({ token }) => {
    return (dispatch) => {
        dispatch({ type: OFFER_TYPE_REQUEST });
        axios({
            url: `${baseUrl}/seller/offer/type?token=${token}`,
            method: 'get',
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(offerTypeSuccess(response.data.data));
            } else if (status === 500) {
                Alert.alert("TYPES not RECIEVED");
                dispatch(offerTypeFailure());
            }
        }).catch((error) => {
            Alert.alert("TYPES ERROR");
            dispatch(offerTypeFailure());
        });
    }
};
export const offerTypeSuccess = (response) => {
    const { select_offer_type } = response;
    return {
        type: OFFER_TYPE_SUCCESS,
        select_offer_type
    };
};
export const offerTypeFailure = () => {
    return {
        type: OFFER_TYPE_FAILURE,
    };
};
export const selectedOfferTypeid = (text) => {
    return {
        type: OFFER_TYPE_ID_CHANGE,
        payload: text

    };
};
// SELECT OFFER CATEGORY
export const selectCategoryType = ({ token }) => {
    return (dispatch) => {
        dispatch({ type: OFFER_CATEGORY_REQUEST });
        axios({
            url: `${baseUrl}/seller/category/main?token=${token}`,
            method: 'get',
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(offerCategorySuccess(response.data.data));
            } else if (status === 500) {
                Alert.alert("CATEGORIES not RECIEVED");
                dispatch(offerCategoryFailure());
            }
        }).catch((error) => {
            Alert.alert("ERROR IN CATEGORIES");
            dispatch(offerCategoryFailure());
        });
    }
};
export const offerCategorySuccess = (response) => {
    const { select_category_type } = response;

    return {
        type: OFFER_CATEGORY_SUCCESS,
        select_category_type
    };
};
export const offerCategoryFailure = () => {
    return {
        type: OFFER_CATEGORY_FAILURE,
    };
};
export const selectedofferCategoryId = (text) => {
    const { category_id } = text;
    return {
        type: OFFER_CATEGORY_ID_CHANGE,
        payload: text,
    }
}

// SELECT OFFER SUB CATEGORY
export const selectSubCategoryType = ({ token, category_id }) => {
    return (dispatch) => {
        dispatch({ type: OFFER_SUB_CATEGORY_REQUEST });
        axios({
            url: `${baseUrl}/seller/category/sub?token=${token}`,
            method: 'post',
            data: {
                token,
                category_id: category_id
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(offerSubCategorySuccess(response.data.data));
            } else if (status === 500) {
                Alert.alert("SUD CATEGORIES not RECIEVED");
                dispatch(offerSubCategoryFailure());
            }
        }).catch((error) => {
            console.log(error)
            Alert.alert("SUB CATEGORIES ERROR");
            dispatch(offerSubCategoryFailure());
        });
    }
};
export const offerSubCategorySuccess = (response) => {
    const { select_sub_category_type } = response;
    return {
        type: OFFER_SUB_CATEGORY_SUCCESS,
        select_sub_category_type
    };
};
export const offerSubCategoryFailure = () => {
    return {
        type: OFFER_SUB_CATEGORY_FAILURE,
    };
};

export const selectedSubCategoryId = (text) => {
    return {
        type: OFFER_SUB_CATEGORY_ID_CHANGE,
        payload: text
    };
};

export const offerDescriptionChanged = (text) => {
    return {
        type: OFFER_DESCRIPTION_CHANGE,
        payload: text
    };
};

export const createOfferRequest = ({
    token,
    category_id,
    offer_type_id,
    offer_description,
    start_date,
    end_date,
    // images[0 ] = 2639307578453ceb01ebf75ecb6259c1f37fe2c81a0baabc59.jpeg
}) => {
    return (dispatch) => {
        dispatch({ type: OFFER_CREATE_REQUEST });
        axios({
            url: `${baseUrl}/seller/offer/create?token=${token}`,
            method: 'post',
            data: {
                token,
                category_id: category_id,
                offer_type_id,
                offer_description: offer_description,
                start_date: start_date,
                end_date: end_date,
            }
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                Alert.alert("OFFER  CREATED SUCCESSFULLY")
                dispatch(offerCreatedSuccess(response.data.data));
            } else if (status === 500) {
                Alert.alert("OFFER NOT CREATED");
                dispatch(offerCreatedFail());
            }
        }).catch((error) => {
            Alert.alert("ERROR");
            console.log(error)
            dispatch(offerCreatedFail());
        });
    }
}

export const offerCreatedSuccess = (response) => {
    // const { select_sub_category_type } = response;
    return {
        type: OFFER_CREATE_SUCCESS,
        // select_sub_category_typ
    };
};

export const offerCreatedFail = (response) => {
    // const { select_sub_category_type } = response;
    return {
        type: OFFER_CREATE_SUCCESS,
        // select_sub_category_typ
    };
};

export const startDateChange = (text) => {
    return {
        type: OFFER_START_DATE_CHANGE,
        payload: text
    };
};

export const endDateChange = (text) => {
    return {
        type: OFFER_END_DATE_CHANGE,
        payload: text
    };
};


// export const groupDescriptionChanged = (text) => {
//     return {
//         type: GROUP_DESC_CHANGE,
//         payload: text
//     };
// };

