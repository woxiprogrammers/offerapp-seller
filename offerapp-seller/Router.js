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
                  <Scene hideNavBar key="offerListingScreen" component={OfferListing} />
                  <Scene hideNavBar key="createOfferScreen" component={CreateOffer} />
                  <Scene hideNavBar key="addToGroupScreen" component={AddToGroup} />
                  <Scene hideNavBar key="iAmIntrestedScreen" component={IamIntrested} />
                  <Scene hideNavBar key="accountInfoScreen" component={AccountInfo} />
                  <Scene hideNavBar key="promoteOfferScreen" component={PromoteOffer} />
                  <Scene hideNavBar key="groupListingScreen" component={GroupListing} />
                  <Scene hideNavBar key="groupMemberListingScreen" component={GroupMemberListing} />
                  <Scene hideNavBar key="createGroupScreen" component={CreateGroup} />
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
