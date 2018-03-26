import React from 'react';
import { Scene, Router, Drawer, Stack, Overlay } from 'react-native-router-flux';
import OfferListing from './src/screens/OfferListing';
import CreateOffer from './src/screens/CreateOffer';
import AddToGroup from './src/screens/AddToGroup'
import DrawerComponent from './src/components/drawer/DrawerComponent';
import IamIntrested from './src/screens/IamIntrested';

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
                  <Scene hideNavBar key="OfferListingScreen" component={OfferListing} />
                  <Scene hideNavBar key="CreateOfferScreen" component={CreateOffer} />
                  <Scene hideNavBar key="AddToGroupScreen" component={AddToGroup} />
                  <Scene hideNavBar key="IamIntrestedScreen" component={IamIntrested} />
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
