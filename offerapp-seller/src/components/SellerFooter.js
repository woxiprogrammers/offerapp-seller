import React, { Component } from 'react';
import {
  Container,
  Button,
  Text,
  Footer,
  FooterTab,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import prompt from 'react-native-prompt-android';
import { Alert, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  getGrabCode,
  verifyGrabCodeRequest
} from '../actions';
import { connect } from 'react-redux';

export class SellerFooter extends Component {
  grabCodeChange(text) {
    console.log("grabcode recived");
    console.log(text);
    this.props.getGrabCode(text);
    const{
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
        { text: 'OK', onPress: grabCode => this.grabCodeChange(grabCode) },
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
        <Button vertical
          onPress={() => {
            { this.renderGCPrompt() }
          }}>

          <FontAwesome name="handshake-o" size={22} color='white' />
          <Text style={{ color: 'white' }}>Grab Offer</Text>
        </Button>
      )

    } else if (Platform.OS === 'android') {
      return (
        <Button vertical
          onPress={
            Actions.grabOfferScreen
          }>

          <FontAwesome name="handshake-o" size={22} color='white' />
          <Text style={{ color: 'white' }}>Grab Offer</Text>
        </Button>
      )
    }
  }
  render() {
    return (

      <Container>
        <Footer>
          <FooterTab style={{ backgroundColor: '#C10F41' }}>
            {/* <Button vertical
              onPress={() => { */}
            {this.renderGrabCodeOption()}
            {/* }}>

              <FontAwesome name="handshake-o" size={22} color='white' />
              <Text style={{ color: 'white' }}>Grab Offer</Text>
            </Button> */}
            <Button vertical
              onPress={() => {
                Alert.alert('Work in Progress');
              }}>
              <FontAwesome name="filter" size={22} style={{ color: 'white' }} />
              <Text style={{ color: 'white' }}>Filter</Text>
            </Button>
          </FooterTab>
        </ Footer>
      </Container>
    );
  }
}
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
)(SellerFooter);