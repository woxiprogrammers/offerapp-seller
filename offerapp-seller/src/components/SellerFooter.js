import React, { Component } from 'react';
import { Container, 
  Button, 
  Text,  
  Footer,
  FooterTab, } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import prompt from 'react-native-prompt-android';
import { Alert } from 'react-native';

export default class SellerFooter extends Component {
  render() {
    return (
      
      <Container>
          <Footer style={{backgroundColor: '#C10F41'}}>
            <FooterTab>
                <Button vertical  
                onPress={() => {
                  prompt(
                    'Enter Grab Code',
                    "Enter customer's Grab Code to complete the transaction",
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: grabCode => console.log('OK Pressed, Grab Code: ' + grabCode)},
                    ],
                    {
                    }
                  );
                }}>
                    
                    <FontAwesome name="handshake-o" size={22} color='white' />
                    <Text style={{color:'white'}}>Grab Offer</Text>
                </Button>
                <Button vertical 
                  onPress={() => {
                    Alert.alert('Work in Progress');
                  }}>
                    <FontAwesome name="filter" size={22}  style={{color:'white'}}/>  
                    <Text style={{color:'white'}}>Filter</Text>
                </Button>
            </FooterTab>
          </ Footer>
      </Container>
    );
  }
}
