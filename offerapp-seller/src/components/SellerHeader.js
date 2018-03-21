import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  Button, 
  Icon, 
  Title } from 'native-base';

export default class SellerHeader extends Component {
  render() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row'}}>
        <Left>
            <Button transparent>
              <Icon name='menu' style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Offers</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='md-notifications' style={{color:'yellow'}}/>
            </Button>
          </Right>
        </ View>
    );
  }
}
