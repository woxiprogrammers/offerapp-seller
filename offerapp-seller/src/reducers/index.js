import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import OfferLisitingReducers from './OfferListingReducer';
import AddToGroupReducer from './AddToGroupReducer'
import GroupReducers from './Group';
import OfferReducer from './Offer'
export default combineReducers({
  user: LoginReducers,
  offerlist: OfferLisitingReducers,
  addToGroup: AddToGroupReducer,
  group: GroupReducers,
  offer: OfferReducer
});
