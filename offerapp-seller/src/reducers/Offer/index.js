import { combineReducers } from 'redux';
import CreateOfferReducer from './CreateOfferReducer';
import OfferDetailReducer from './OfferDetailReducer';
import PromoteOfferReducer from './PromoteOfferReducer';
import OffersSentReducer from './OffersSentReducer';
export default combineReducers({
    createOffer: CreateOfferReducer,
    offerDetail: OfferDetailReducer,
    promoteOffer: PromoteOfferReducer,
    offersSent: OffersSentReducer
  });