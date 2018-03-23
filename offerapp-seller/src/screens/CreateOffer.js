import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Container, 
  Header,
  Content, 
  Icon,
  Button,
  Text,
  Input,
  Item,
  Footer } from 'native-base';
import SellerHeader from '../components/SellerHeader';
import SellerFooter from '../components/SellerFooter';
import SelectOfferType from '../components/SelectOfferType';
import SelectOfferCategory from '../components/SelectOfferCategory';
import DatePicker from '../components/DatePicker';
import DescriptionBox from '../components/DescriptionBox'

import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class OfferListing extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
            <Header style={{backgroundColor: '#C10F41'}}>
              <SellerHeader title='Create Offer'/>
            </ Header>
            <Content>
              <View style={{paddingLeft:10, paddingRight: 10}}>
                <SelectOfferType />
                <SelectOfferCategory />
                <Text style={{paddingBottom: 10, paddingTop: 10}}>Offer Validity</ Text>
                  <DatePicker />
              </ View>
              
              {/* Offer Description */}
              <View style={{paddingLeft:10, paddingRight: 10}}>
                <Text style={{paddingBottom: 10, paddingTop: 10}}>Offer Description</ Text>
                <DescriptionBox />
              </View>

              {/* Upload Photos */}
              <Text style={{paddingLeft:10, paddingBottom: 10, paddingTop: 10}}>Upload Photos</ Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignSelf: 'center'
                }}
              >  
                <Button info>
                  <Text> Browse </Text> 
                </ Button>
                <Button info>
                  <Text> Upload </Text>
                </ Button>
              </View>
              <View>
              <Button block style={{backgroundColor: '#C10F41'}} onPress={Actions.OfferListingScreen}>
                <Text> Submit </Text>
              </ Button>
              </View>
            </ Content>
        </ Container>
        </ScrollView>
    );
  }
}
