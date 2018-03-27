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

        {/* Account Information */}
        <Button block light
          style={{ width: responsiveWidth(80) }}
          onPress={Actions.accountInfoScreen}
        >
          <Text>Account Information</Text>
        </Button>

        {/* Manage Offer */}
        <Button block light
          style={{ width: responsiveWidth(80) }}
          onPress={Actions.offerListingScreen}
        >
          <Text>Manage Offer</Text>
        </Button>

        {/* Promote Offer */}
        <Button block light
          style={{ width: responsiveWidth(80) }}
          onPress={Actions.promoteOfferScreen}
        >
          <Text>Promote Offer</Text>
        </Button>

        {/* Manage Group */}
        <Button block light
         style={{ width: responsiveWidth(80) }}
         onPress={Actions.groupListingScreen}
         >
          <Text>Manage Group</Text>
        </Button>

        {/* Logout */}
        <Button block light style={{ width: responsiveWidth(80) }}>
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }
}
