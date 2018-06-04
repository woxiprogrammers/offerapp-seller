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
import { logoutUser } from '../../actions';
import { connect } from 'react-redux';
export class DrawerComponent extends React.Component {
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
          <View style={{ backgroundColor: '#e2e2e2', height: responsiveHeight(0.1), paddingTop: '2%' }} />
          <View style={{ flex: 1, alignSelf: 'center', paddingTop: '2%' }}>
            {/* Account Information */}
            <TouchableOpacity
              style={{ width: responsiveWidth(80) }}
              onPress={Actions.accountInfoScreen}
            >
              <View style={styles.drawerStyle}>
                <MaterialCommunityIcons name="account" size={responsiveFontSize(3.5)} style={{ color: colors.headerColor }} />
                <Text style={styles.drawerText}> Account Information</Text>
              </View>
            </TouchableOpacity>

            {/* Manage Offer */}
            <TouchableOpacity
              style={{ width: responsiveWidth(80) }}
              onPress={Actions.offerListingScreen}
            >
              <View style={styles.drawerStyle}>
                <MaterialIcons name="local-offer" size={responsiveFontSize(3.5)} style={{ color: colors.headerColor }} />
                <Text style={styles.drawerText}> Manage Offer</Text>
              </View>
            </TouchableOpacity>

            {/* Promote Offer */}
            <TouchableOpacity
              style={{ width: responsiveWidth(80) }}
              onPress={Actions.promoteOfferScreen}
            >
              <View style={styles.drawerStyle}>
                <Entypo name="notification" size={responsiveFontSize(3.5)} style={{ color: colors.headerColor }} />
                <Text style={styles.drawerText}> Promote Offer</Text>
              </View>
            </TouchableOpacity>

            {/* Manage Group */}
            <TouchableOpacity
              style={{ width: responsiveWidth(80) }}
              onPress={Actions.groupListingScreen}
            >
              <View style={styles.drawerStyle}>
                <FontAwesome name="group" size={responsiveFontSize(3.5)} style={{ color: colors.headerColor }} />
                <Text style={styles.drawerText}> Manage Group</Text>
              </View>
            </TouchableOpacity>

            {/* Logout */}
            <TouchableOpacity
              style={{
                width: responsiveWidth(80)
              }}
              onPress={() => { this.props.logoutUser() }}
            >
              <View style={styles.drawerStyle}>
                <Entypo name="log-out" size={responsiveFontSize(3.5)} style={{ color: colors.headerColor }} />
                <Text style={styles.drawerText}> Logout</Text>
              </View>
            </TouchableOpacity>
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
  },
  drawerStyle: {
    flexDirection: 'row',
    marginTop: '3.5%'
  },
  drawerText:{
    fontSize: responsiveFontSize(3.5),
    color: '#666666'
  }

});

function mapStateToProps({ user }) {
  return {
    ...user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => {
      return dispatch(logoutUser());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);