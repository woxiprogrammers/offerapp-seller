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
  import OfferCard from '../components/OfferCard';
  import SellerHeader from '../components/SellerHeader';
  import FabAdd from '../components/FabAdd';
  import SellerFooter from '../components/SellerFooter';


export default class OfferListing extends Component {
  render() {
    return (
      
      <Container>
        <Header style={{backgroundColor: '#C10F41'}}>
          <SellerHeader />
        </ Header >     

        {/* Sliding buttons */}
        <Content>
          <View style={{
            flex: 1,
            flexDirection: 'row'}}>
              <ScrollView horizontal>
                <Button warning style={styles.filterButton}><Text> All </Text></Button>
                <Button warning style={styles.filterButton}><Text> Pending </Text></Button>
                <Button warning style={styles.filterButton}><Text> Approved </Text></Button>
                <Button warning style={styles.filterButton}><Text> Disapproved </Text></Button>
              </ ScrollView>
          </View>

          {/* seacrh bar */}
          <Item regular>
           <Icon active name='ios-search' />
           <Input placeholder='Search'/>
        </Item>

        {/* offer cards */}
        <OfferCard />
        </Content>

        {/* floating Button */}
        <FabAdd />

          {/* footer with tabs */}
          <Footer >
            <SellerFooter />
          </ Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  filterButton:{
    borderRadius: 0, 
    borderColor: '#000000', 
    borderRightWidth: 1,
  }
});