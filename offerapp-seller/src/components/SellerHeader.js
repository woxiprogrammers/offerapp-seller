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
          <Body >
            <Title style={{color:'white'}}>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent badge>
              <Icon name='md-notifications' style={{color:'yellow'}}/>
              <Badge primary top>
                <Text>2</Text>
              </Badge>
            </Button>
          </Right>
        </ View>
    );
  }
}
