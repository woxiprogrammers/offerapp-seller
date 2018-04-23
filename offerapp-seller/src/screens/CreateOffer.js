import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Icon,
  Button,
  Text,
  Input,
  Item,
  Footer,
  Form,
  Spinner
} from 'native-base';
import { ImagePicker } from 'expo';
import SellerHeader from '../components/SellerHeader';
import SellerFooter from '../components/SellerFooter';
import DropDownSelect from '../components/DropDownSelect'
import DatePicker from '../components/DatePicker';
import DescriptionBox from '../components/DescriptionBox'

import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class OfferListing extends Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    return (
      <ScrollView>
        <Container style={{ marginTop: '5.8%' }}>
          <Header style={{ backgroundColor: '#C10F41' }}>
            <SellerHeader title='Create Offer' />
          </ Header>
          <Content>
            <Form>
              <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                {/* Select offer Type */}
                <DropDownSelect selectLabel='Select Offer Type' />

                {/* Select Category  */}
                <DropDownSelect selectLabel='Select Category' />
                <Text style={{ paddingBottom: 10, paddingTop: 10 }}>Offer Validity</ Text>

                {/* Date Picker */}
                <DatePicker />
              </ View>

              {/* Offer Description */}
              <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Text style={{ paddingBottom: 10, paddingTop: 10 }}>Offer Description</ Text>
                <DescriptionBox />
              </View>

              {/* Upload Photos */}
              <Text style={{ paddingLeft: 10, paddingBottom: 10, paddingTop: 10 }}>Upload Photos</ Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingLeft: '3%'
                }}
              >
                <Button info
                  onPress={this._pickImage}>
                  <Text> Select </Text>
                </ Button>
                {image &&
                  <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
              </View>

              {/* Submit Button */}
              <View style={{ paddingTop: '3%' }}>
                <Button block
                  style={{ backgroundColor: '#C10F41', borderRadius: 0, }}
                  onPress={Actions.offerListingScreen}>
                  <Text> Submit </Text>
                </ Button>
              </View>
            </Form>
          </ Content>
        </ Container>
      </ScrollView>
    );
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
