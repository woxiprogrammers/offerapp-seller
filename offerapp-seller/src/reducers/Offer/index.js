import { combineReducers } from 'redux';
import CreateOfferReducer from './CreateOfferReducer';
export default combineReducers({
    createOffer: CreateOfferReducer,
  });