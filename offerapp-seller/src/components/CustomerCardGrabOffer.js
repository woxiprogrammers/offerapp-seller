import React, { Component } from 'react'
import { Card, CardItem, Body, Left, Text, Right, Button } from 'native-base';
import { View, StyleSheet, Platform } from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight
} from 'react-native-responsive-dimensions';
import prompt from 'react-native-prompt-android';
import { Actions } from 'react-native-router-flux';
import {
  getGrabCode,
  verifyGrabCodeRequest
} from '../actions';
import { connect } from 'react-redux';

export  class CustomerCard extends Component {
  grabCodeChange(text) {
    console.log("grabcode recived");
    console.log(text);
    this.props.getGrabCode(text);
    const {
      token,
      grab_code
    } = this.props;
    this.props.verifyGrabCodeRequest({
      token,
      grab_code
    })
  }
  renderGCPrompt() {
    prompt(
      'Enter Grab Code',
      "Enter customer's Grab Code to complete the transaction",
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: grabCode => this.grabCodeChange(grabCode)  },
      ],
      {
        // type: 'numeric',
        // placeholder: 'Enter Grab Code'
      }
    );
  }

  renderGrabCodeOption() {
    if (Platform.OS === 'ios') {
      return (
        <Button small
          onPress={() => {
            { this.renderGCPrompt() }
          }}>
          <Text style={styles.TextSize}>Grab Code</Text>
        </Button>
      )

    } else if (Platform.OS === 'android') {
      return (
        <Button small
          onPress={
            Actions.grabOfferScreen
          }>
          <Text style={styles.TextSize}>Grab Code</Text>

        </Button>
      )
    }
  }
  render() {
    const {
      customerName,
      customerMobile,
      customerEmail
    } = this.props;

    return (
      <Card>
        <CardItem>
          <Body>
            <View style={{
              flexDirection: 'row'
            }}
            >
              {/* Customer Details */}
              <Left>
                <Text style={styles.TextSize}>Name: {customerName} </Text>
                <Text style={styles.TextSize}>Mobile No.: {customerMobile} </Text>
                <Text style={styles.TextSize}>Email: {customerEmail} </Text>
              </Left>

              {/* Grab code Button */}
              <Right>
                {this.renderGrabCodeOption()}
              </Right>
            </View>
          </ Body>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  TextSize: {
    fontSize: responsiveFontSize(2)
  }
})

function mapStateToProps({ grabCode, user }) {
  const { token } = user;
  return {
      ...grabCode,
      token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    verifyGrabCodeRequest: ({
          token,
          grab_code
      }) => {
          return dispatch(verifyGrabCodeRequest({
              token,
              grab_code
          }));
      },
      getGrabCode: (text) => {
          return dispatch(getGrabCode(text));
      },
      
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerCard);