import { combineReducers } from 'redux';
import CreateOfferReducer from './CreateOfferReducer';
import OfferDetailReducer from './OfferDetailReducer';
export default combineReducers({
    createOffer: CreateOfferReducer,
    offerDetail: OfferDetailReducer,
  });