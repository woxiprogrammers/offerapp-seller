import React from 'react';
import { Scene, Router, Drawer, Stack, Overlay } from 'react-native-router-flux';
import OfferListing from './src/screens/OfferListing';
import CreateOffer from './src/screens/CreateOffer';


class RouterComponent extends React.Component {
  render() {
    console.log('Router Running !!');
    return (
      <Router>
        
                <Stack key="root">
                  <Scene hideNavBar key="OfferListingScreen" component={OfferListing} />
                  <Scene hideNavBar key="CreateOfferScreen" component={CreateOffer} />
                </Stack>
         
      </Router>
    );
  }
}
export default RouterComponent;