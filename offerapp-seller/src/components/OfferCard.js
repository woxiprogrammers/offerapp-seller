import React, { Component } from 'react';
import { View, } from 'react-native';
import { Container, 
    Header, 
    Content, 
    Card, 
    CardItem, 
    Text, 
    Body,
    Badge,
    Button, 
    Left,
    Right} from 'native-base';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import {
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import renderIf from '../condition/renderIf'
import { Actions } from 'react-native-router-flux';

export default class OfferCard extends Component {
  render() {
    return (
        <Content>
       {/* offer cards */}
        <Card>
        <CardItem header>
          <Left>
              <Text>{this.props.cardTitle}</Text>
          </Left>
          <Right>
          <Text>Offer ID: {this.props.offerID}</Text>
          </Right>
          </CardItem>
            <CardItem>
              <Body>
                <View style={{
                  flexDirection: 'row'
                }}>
                  {/* Offer Start and End Date */}
                  <Left>
                    <Text style={{fontSize: responsiveFontSize(2)  }}>Start date: {this.props.startDate} End Date: {this.props.endDate}</Text>
                  </Left>

                  {/* Offer Status */}
                  <Right>
                    <Text >{this.props.offerStatus}</Text>  
                  </Right>
                </View>
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

              {/* Heart Button */}
              {renderIf( 
                this.props.wishlistCount,
                <Button badge transparent>
                  
                  <FontAwesome name="heart" size={22} color='red' />
                  <Badge primary>
                      <Text>{this.props.wishlistCount}</Text>
                  </Badge>
                </ Button>
              )}

              {/* Liked Button */}
              {renderIf(
                this.props.likeCount,
                <Button badge transparent onPress={Actions.iAmIntrestedScreen}>
                <EvilIcons name="like" size={30}  />
                <Badge primary>
                    <Text>{this.props.likeCount}</Text>
                  </Badge>
              </Button>
              )}
            
              {/* Grabed Offers */}
              {renderIf(
                this.props.grabCount,
                <Button transparent badge>
                <FontAwesome name="handshake-o" size={22} />
                <Badge primary>
                    <Text>{this.props.grabCount}</Text>
                  </Badge>
              </Button>
              )}
              
              </View>
            </CardItem>
         </Card>
        </Content>
      
    );
  }
}