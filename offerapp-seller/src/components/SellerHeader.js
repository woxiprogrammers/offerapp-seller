import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  Button, 
  Icon, 
  Title,
  Badge,
  Text
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

export default class SellerHeader extends Component {
  render() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row'}}>
          <Left>
            <Button transparent onPress={Actions.drawerOpen}>
              <Icon name='menu' style={{color:'white'}}/>
            </Button>
          </Left>
          <Body >
            <Title style={{color:'white', width: responsiveWidth(80), fontSize: responsiveFontSize(3)}}>{this.props.title}</Title>
          </Body>
          {/* <Right>
            <Button transparent badge>
              <Icon name='md-notifications' style={{color:'yellow'}}/>
              <Badge primary >
                  <Text>2</Text>
                </Badge>
            </Button>
          </Right> */}
        </ View>
    );
  }
}
