import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import OfferListing from './src/screens/OfferListing';
import CreateOffer from './src/screens/CreateOffer';
// import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return ( 
      <CreateOffer />
    );

  }
}
// const AppNavigation = StackNavigator({
//     OfferListingScreen: { screen: OfferListing },
//     CreateOfferScreen: { screen: CreateOffer },
// });