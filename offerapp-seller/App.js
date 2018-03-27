import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroupList from './src/screens/GroupListing';

import Router from './Router'
export default class App extends React.Component {
  render() {
    return (
      <Router />
      // <GroupList />
    );

  }
}
