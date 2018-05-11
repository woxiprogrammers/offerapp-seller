import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Badge,
  Button,
  Left,
  Right
} from 'native-base';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight
} from 'react-native-responsive-dimensions';
import renderIf from '../condition/renderIf'
import { Actions } from 'react-native-router-flux';

export default class OfferCard extends Component {
  render() {
    const {
      cardTitle,
      offerID,
      startDate,
      endDate,
      likeCount,
      grabCount,
      wishlistCount,
      offerStatus,
    } = this.props;
    return (
      <Content>
        {/* offer cards */}
        <TouchableOpacity
          onPress={() => {
            Actions.push('offerDetailScreen', { getOffer_id: offerID })
          }}>
          <Card >
            <CardItem header>
              <Left>
                <Text>{cardTitle}</Text>
              </Left>
              <Right>
                <Text>Offer ID: {offerID}</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Body>
                <View style={{
                  flexDirection: 'row'
                }}>
                  {/* Offer Start and End Date */}
                  <Left>
                    <Text
                      style={{ fontSize: responsiveFontSize(2) }}
                    >
                      Start date:{"\n"} {startDate} {"\n"} End Date:{"\n"} {endDate}
                    </Text>
                  </Left>

                  {/* Offer Status */}
                  <Right>
                    <Text >{offerStatus}</Text>
                  </Right>
                </View>
              </Body>
            </CardItem>
            {renderIf(
              offerStatus === 'Approved' || offerStatus === 'Expired',
              <CardItem footer style={{ backgroundColor: '#c3cbd8' }}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 15,
                  paddingRight: 15
                }}>

                  {/* Heart Button */}
                  {renderIf(
                    wishlistCount,
                    <Button badge transparent style={{ paddingTop: '3%' }}>
                      <FontAwesome name="heart" size={22} color='red' />
                      <Badge primary style={{ marginTop: -10 }}>
                        <Text >{wishlistCount}</Text>
                      </Badge>
                    </ Button>
                  )}

                  {/* Liked Button */}
                  {renderIf(
                    likeCount,
                    <Button badge transparent
                      style={{ paddingTop: '3%' }}
                      onPress={() => {
                        Actions.push('iAmIntrestedScreen', { getOffer_id: offerID })
                      }}>
                      <EvilIcons name="like" size={30} />
                      <Badge primary style={{ marginTop: -10 }}>
                        <Text>{likeCount}</Text>
                      </Badge>
                    </Button>
                  )}

                  {/* Grabed Offers */}
                  {renderIf(
                    grabCount,
                    <Button badge transparent style={{ paddingTop: '3%' }}>
                      <FontAwesome name="handshake-o" size={22} />
                      <Badge primary style={{ marginTop: -10 }}>
                        <Text>{grabCount}</Text>
                      </Badge>
                    </Button>
                  )}

                </View>
              </CardItem>
            )}
          </Card>
        </TouchableOpacity>
      </Content>

    );
  }
}