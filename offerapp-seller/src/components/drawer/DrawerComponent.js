import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  variables,
  colors,
} from '../../styles';
import { Button, Content, Container, Thumbnail } from 'native-base';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
export default class DrawerComponent extends React.Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Content>
          <TouchableWithoutFeedback>
            <View style={styles.profileStyle}>
              <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <Text
                  style={{ fontSize: responsiveFontSize(3), color: 'white' }}
                >
                  Hello, Annu</Text>
                <Text
                  style={{ fontSize: responsiveFontSize(2), color: 'white' }}
                >
                  Reward Points:1234</Text>
              </View>
              <View style={{ paddingLeft: responsiveWidth(5) }}>
                <Thumbnail
                  large
                  source={{ uri: 'http://s3.amazonaws.com/cdn.roosterteeth.com/default/md/user_profile_male.jpg' }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
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
            <Button block light
              style={{
                width: responsiveWidth(80)
              }}
              onPress={Actions.LoginScreen}
            >
              <Text>Logout</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.darkGray
  },
  profileStyle: {
    paddingTop: responsiveHeight(6),
    paddingLeft: responsiveWidth(5),
    flexDirection: 'row',
    alignSelf: 'center'
  },
  iconStyle: {
    flexDirection: 'row',
    height: responsiveHeight(10),
    marginTop: responsiveHeight(5)

  },
  categoriesStyle: {
    paddingLeft: responsiveWidth(5),
  },
  categoriesListStyle: {
    marginLeft: responsiveWidth(-5)
  }

});