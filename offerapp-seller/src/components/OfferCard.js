import React, { Component } from 'react';
import { View, } from 'react-native';
import { Container, 
    Header, 
    Content, 
    Card, 
    CardItem, 
    Text, 
    Body } from 'native-base';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';

export default class OfferCard extends Component {
  render() {
    return (
      
      
        <Content>
                {/* offer cards */}
        <Card>
        <CardItem header>
              <Text>Buy 1 get 1</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer style={{backgroundColor: '#c3cbd8'}}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 15,
                paddingRight: 15
              }}>
                <FontAwesome name="heart" size={22} color='red' />
                <EvilIcons name="like" size={30}  />
                <FontAwesome name="handshake-o" size={22} />
              </View>
            </CardItem>
         </Card>
        </Content>
      
    );
  }
}