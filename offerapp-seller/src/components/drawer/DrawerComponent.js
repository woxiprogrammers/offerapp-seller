import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  variables,
  colors,
} from '../../styles';
import { Button, Content, Container, Thumbnail } from 'native-base';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class DrawerComponent extends React.Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Content>
          <TouchableWithoutFeedback>
            <View style={styles.profileStyle}>
              <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <Text
                  style={{ fontSize: responsiveFontSize(3) }}
                >
                  Hello, Seller</Text>
              </View>
              <View style={{ paddingLeft: responsiveWidth(5) }}>
                <Thumbnail
                  large
                  source={{ uri: 'http://s3.amazonaws.com/cdn.roosterteeth.com/default/md/user_profile_male.jpg' }}
                />
              </View>
            </View>
           
          </TouchableWithoutFeedback>
          <View style={{ backgroundColor: '#e2e2e2', height: responsiveHeight(0.1), paddingTop: '2%'}} />
          <View style={{ flex: 1, alignSelf: 'center', paddingTop: '2%' }}>
            {/* Account Information */}
            <Button full light
              style={{ width: responsiveWidth(80) }}
              onPress={Actions.accountInfoScreen}
            >
              <MaterialCommunityIcons name="account" size={30} style={{color: colors.headerColor}}/><Text>Account Information</Text>
            </Button>

            {/* Manage Offer */}
            <Button full light
              style={{ width: responsiveWidth(80) }}
              onPress={Actions.offerListingScreen}
            >
             <MaterialIcons name="local-offer" size={30} style={{color: colors.headerColor}}/><Text>Manage Offer</Text>
            </Button>

            {/* Promote Offer */}
            <Button full light
              style={{ width: responsiveWidth(80) }}
              onPress={Actions.promoteOfferScreen}
            >
               <Entypo name="notification" size={30} style={{color: colors.headerColor}}/><Text>Promote Offer</Text>
            </Button>

            {/* Manage Group */}
            <Button full light
              style={{ width: responsiveWidth(80) }}
              onPress={Actions.groupListingScreen}
            >
              <FontAwesome name="group" size={30} style={{color: colors.headerColor}}/><Text>Manage Group</Text>
            </Button>

            {/* Logout */}
            <Button full light
              style={{
                width: responsiveWidth(80)
              }}
              onPress={Actions.LoginScreen}
            >
              <Entypo name="log-out" size={30} style={{color: colors.headerColor}}/><Text>Logout</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white'
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