import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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
            </ Content>
        </ Container>
    );
  }
}
