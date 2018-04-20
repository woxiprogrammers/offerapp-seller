import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
 import OfferLisitingReducers from './OfferListingReducer';
// import GroupsReducers from './groupsreducers';
// import WishListReducers from './wishlistreducers';
// import InterestedReducers from './interestedreducers';
// import OfferReducers from './OfferReducers';
// import CategoriesReducers from './categoryreducers';

export default combineReducers({
  user: LoginReducers,
  offerlist: OfferLisitingReducers
//   main: MainReducers,
//   groups: GroupsReducers,
//   wishlist: WishListReducers,
//   interested: InterestedReducers,
//   offer: OfferReducers,
//   categories: CategoriesReducers
});
