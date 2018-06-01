import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import OfferLisitingReducers from './OfferListingReducer';
import AddToGroupReducer from './AddToGroupReducer'
import GroupReducers from './Group';
import OfferReducer from './Offer';
import SignUpReducer from './SignUpReducers';
import AccountInformationReducer from './AccountInformationReducer';
import ForgotPasswordReducer from './ForgotPasswordReducers';
export default combineReducers({
  user: LoginReducers,
  offerlist: OfferLisitingReducers,
  addToGroup: AddToGroupReducer,
  group: GroupReducers,
  offer: OfferReducer,
  signup: SignUpReducer,
  accountInformation: AccountInformationReducer,
  forgotpassword: ForgotPasswordReducer
});
