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
    UPLOAD_IMAGE_REQUEST,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_FAILURE,
    baseUrl
} from '../../constants'
import { Alert } from 'react-native';
import axios from 'axios';
import { Permissions, CAMERA_ROLL } from 'expo';

async function permissionForCamerRoll() {
    const { status: existingStatusForCameraRoll } = await Permissions.getAsync(
        Permissions.CAMERA_ROLL
    );
    let finalStatus = existingStatusForCameraRoll;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatusForCameraRoll !== 'granted') {
        // Android remote notification permissions are granted dimageUring the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }
}

// SELECT OFFER TYPE
export const selectOfferType = ({ token }) => {
    permissionForCamerRoll();
    return (dispatch) => {
        dispatch({ type: OFFER_TYPE_REQUEST });
        axios({
            url: `${baseUrl}/seller/offer/type?token=${token}`,
            method: 'get',
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(offerTypeSuccess(response.data.data));
            }
        }).catch((error) => {
            Alert.alert("ERROR");
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
export const selectSubCategoryType = ({ token, category_id, has_subcategory }) => {
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

export const uploadIamge = ({
    selectedImage,
    token
}) => {
    const data = new FormData();
    data.append('name');
    data.append('selectedImage', {
        uri: selectedImage.uri,
        type: selectedImage.type,
        name: 'testPhotoName'
    });
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    return (dispatch) => {
        dispatch({ type: UPLOAD_IMAGE_REQUEST });
        axios({
            url: `${baseUrl}save-image?token=${token}`,
            method: 'post',
            data:{
                image_for: 'offer-create',
                image: selectedImage.uri,
            },
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
        }).then(async (response) => {
            var status = response.status;
            if (status === 200) {
                dispatch(imageUploadedSuccessfully(response.data));
                console.log(response.data.filename);
                Alert.alert(response.data.filename);
            }
        }).catch((error) => {
            console.log(error);
            dispatch(imageNotUploaded())
            Alert.alert("IMAGE NOT UPLOADED")
        })
    }
}

export const imageUploadedSuccessfully = (response) => {
    return {
        type: UPLOAD_IMAGE_SUCCESS
    }
}

export const imageNotUploaded = () => {
    return {
        type: UPLOAD_IMAGE_FAILURE
    }
}
