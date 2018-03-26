import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  variables,
 } from '../../styles';
import { Button } from 'native-base';
import { responsiveWidth } from 'react-native-responsive-dimensions';
export default class DrawerComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignSelf: 'center', paddingTop: variables.SCREEN_HEIGHT / 2 }}>
        <Button block light style={{width: responsiveWidth(80)}}>
          <Text>Account Information</Text>
        </Button>
        <Button block light style={{width: responsiveWidth(80)}}>
          <Text>Manage Order</Text>
        </Button>
        <Button block light style={{width: responsiveWidth(80)}}>
          <Text>Promot Offer</Text>
        </Button>
        <Button block light style={{width: responsiveWidth(80)}}>
          <Text>Manage Group</Text>
        </Button>
        <Button block light style={{width: responsiveWidth(80)}}>
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }
}
