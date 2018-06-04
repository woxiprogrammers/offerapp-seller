import {
    OFFER_CREATE_REQUEST,
    OFFER_TYPE_REQUEST,
    OFFER_CATEGORY_REQUEST,
    OFFER_CREATE_SUCCESS,
    OFFER_CREATE_FAILURE,
    OFFER_TYPE_SUCCESS,
    OFFER_TYPE_FAILURE,
    OFFER_CATEGORY_CHANGE,
    OFFER_START_DATE_CHANGE,
    OFFER_END_DATE_CHANGE,
    OFFER_DESCRIPTION_CHANGE,
    OFFER_IMAGE_UPLOAD,
    OFFER_CATEGORY_SUCCESS,
    OFFER_CATEGORY_FAILURE,
    OFFER_SUB_CATEGORY_FAILURE,
    OFFER_SUB_CATEGORY_REQUEST,
    OFFER_SUB_CATEGORY_SUCCESS,
    OFFER_TYPE_ID_CHANGE,
    OFFER_CATEGORY_ID_CHANGE,
    OFFER_SUB_CATEGORY_ID_CHANGE,
    UPLOAD_IMAGE_REQUEST,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_FAILURE
} from '../../constants'

const INITIAL_STATE = {
    select_offer_type: [],
    select_category_type: [],
    select_sub_category_type: [],
    offer_type_id: '',
    category_id: 1,
    sub_category_id: '',
    offer_description: '',
    start_date: '',
    end_date: '',
    isLoading: false,
    has_subcategory: false,
    images: [],
    categoryLoading: false,
    subCategoryLoading: false,
    offerTypeLoading: false,
    selected_category_id: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPLOAD_IMAGE_FAILURE:
        return{
            ...state,
            isLoading: false
        }
        case UPLOAD_IMAGE_SUCCESS:
        return{
            ...state,
            isLoading: false,
            images: action.images
        }
        case UPLOAD_IMAGE_REQUEST:
        return{
            ...state,
            isLoading: true
        }
        case OFFER_TYPE_REQUEST:
            return {
                ...state,
                offerTypeLoading: true
            }
        case OFFER_TYPE_SUCCESS:
            return {
                ...state,
                select_offer_type: action.select_offer_type,
                offerTypeLoading: false,
                offer_type_id: action.select_offer_type[0].offer_type_id
            }
        case OFFER_TYPE_FAILURE:
            return {
                ...state,
                offerTypeLoading: false
            }

        case OFFER_CATEGORY_REQUEST:
            return {
                ...state,
                categoryLoading: true
            }

        case OFFER_CATEGORY_SUCCESS:
        
            return {
                ...state,
                select_category_type: action.select_category_type,
                categoryLoading: false,
                category_id: action.select_category_type[0].category_id,
                has_subcategory: action.select_category_type[0].has_subcategory
            }

        case OFFER_CATEGORY_FAILURE:
            return {
                ...state,
                categoryLoading: false
            }

        case OFFER_SUB_CATEGORY_REQUEST:
            return {
                ...state,
                subCategoryLoading: true
            }

        case OFFER_SUB_CATEGORY_SUCCESS:
            return {
                ...state,
                select_sub_category_type: action.select_sub_category_type,
                subCategoryLoading: false,
                sub_category_id: action.select_sub_category_type[0].sub_category_id
            }

        case OFFER_SUB_CATEGORY_FAILURE:
            return {
                ...state,
                subCategoryLoading: false
            }

        case OFFER_TYPE_ID_CHANGE:
            return {
                ...state,
                offer_type_id: action.payload
            }
        case OFFER_CATEGORY_ID_CHANGE:
            return {
                ...state,
                category_id: action.payload,
                selected_category_id: action.payload
            }
        case OFFER_SUB_CATEGORY_ID_CHANGE:
            return {
                ...state,
                sub_category_id: action.payload,
                selected_category_id: action.payload
            }
        case OFFER_DESCRIPTION_CHANGE:
            return {
                ...state,
                offer_description: action.payload
            }

        case OFFER_CREATE_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case OFFER_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false
            }


        case OFFER_START_DATE_CHANGE:
            return {
                ...state,
                start_date: action.payload
            }

        case OFFER_END_DATE_CHANGE:
            return {
                ...state,
                end_date: action.payload
            }

        default:
            return state;
    }
}