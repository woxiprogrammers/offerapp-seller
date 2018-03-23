import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OfferListing from './src/screens/OfferListing';
import CreateOffer from './src/screens/CreateOffer';
import Router from './Router'
export default class App extends React.Component {
  render() {
    return ( 
      <Router />
    );

  }
}
