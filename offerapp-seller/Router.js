import React from 'react';
import { Scene, Router, Drawer, Stack, Overlay } from 'react-native-router-flux';
import OfferListing from './src/screens/OfferListing';
import CreateOffer from './src/screens/CreateOffer';
import AddToGroup from './src/screens/AddToGroup'
import DrawerComponent from './src/components/drawer/DrawerComponent';
import IamIntrested from './src/screens/IamIntrested';
import AccountInfo from './src/screens/AccountInfo';
import GroupListing from './src/screens/GroupListing';
import GroupMemberListing from './src/screens/GroupMemberListing';
import PromoteOffer from './src/screens/PromoteOffer';
import CreateGroup from './src/screens/CreateGroup';
import SellerRegistration from './src/screens/SellerRegistration';
import OffersSent from './src/screens/OffersSent';
import OfferDetail from './src/screens/OfferDetail';
import MultiSelectDropDown from './src/components/MultiSelectDropDown'
import Login from './src/screens/Login'
import MobileVerifyScreen from './src/screens/MobileVerifyScreen';
import OtpVerifyScreen from './src/screens/OtpVerifyScreen';
import GrabOfferScreen from './src/screens/GrabOfferScreen';
class RouterComponent extends React.Component {
  render() {
    console.log('Router Running !!');
    return (
      <Router>
        <Overlay key="overlay">
          <Scene key="root">
            <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerComponent}
            >
              <Scene hideNavBar panHandlers={null} key="mainroot">
                <Stack key="root">
                  <Scene hideNavBar  key="LoginScreen" component={Login} />
                  <Scene hideNavBar initial key="offerListingScreen" component={OfferListing} />
                  <Scene hideNavBar key="createOfferScreen" component={CreateOffer} />
                  <Scene hideNavBar key="addToGroupScreen" component={AddToGroup} />
                  <Scene hideNavBar key="iAmIntrestedScreen" component={IamIntrested} />
                  <Scene hideNavBar key="accountInfoScreen" component={AccountInfo} />
                  <Scene hideNavBar key="promoteOfferScreen" component={PromoteOffer} />
                  <Scene hideNavBar key="groupListingScreen" component={GroupListing} />
                  <Scene hideNavBar key="groupMemberListingScreen" component={GroupMemberListing} />
                  <Scene hideNavBar key="createGroupScreen" component={CreateGroup} />
                  <Scene hideNavBar key="sellerRegistrationScreen" component={SellerRegistration} />
                  <Scene hideNavBar key="offersSentScreen" component={OffersSent} />
                  <Scene hideNavBar key="offerDetailScreen" component={OfferDetail} />
                  <Scene hideNavBar key="multiSelectDropDownScreen" component={MultiSelectDropDown} />
                  <Scene hideNavBar key="mobileVerifyScreen" component={MobileVerifyScreen} />
                  <Scene hideNavBar key="otpVerifyScreen" component={OtpVerifyScreen} />
                  <Scene hideNavBar key="grabOfferScreen" component={GrabOfferScreen} />
                </Stack>
              </Scene>
            </Drawer>
          </Scene>
        </Overlay>
      </Router>
    );
  }
}
export default RouterComponent;
