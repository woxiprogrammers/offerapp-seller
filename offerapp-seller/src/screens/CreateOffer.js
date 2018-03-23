import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
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

export default class OfferListing extends Component {
  render() {
    return (
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
            </ Content>
        </ Container>
    );
  }
}

const styles = StyleSheet.create({
  descriptionBox:{
    flex: 1,
    justifyContent: 'center',
    height: height(20), // 70% of height device screen
    width: width(80), // 80% of width device screen
    borderColor: 'black', 
    borderWidth: 1, 
    
  },
  });