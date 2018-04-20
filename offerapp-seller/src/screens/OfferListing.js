import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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
  Tab,
  Tabs,
  TabHeading,
  ScrollableTab
} from 'native-base';
import OfferCard from '../components/OfferCard';
import SellerHeader from '../components/SellerHeader';
import FabAdd from '../components/fab/FabAdd';
import SellerFooter from '../components/SellerFooter';
import { colors } from '../styles';
import {
  offerStatus,
  offerList
} from '../actions';
import AllTab from '../tabs/AllTab';

export default class OfferListing extends Component {
  
  onStatuChange (text) {
    this.props.offerStatus(text);
  }

  render() {
    return (
      <Container style={{ marginTop: '5.8%' }}>
        <Header style={{ backgroundColor: colors.headerColor, }} hasTabs >
          <SellerHeader title='Welcome' />
        </ Header >

        <Content >
          {/* seacrh bar */}
          <Item regular>
            <Icon active name='ios-search' />
            <Input placeholder='Search' />
          </Item>
          {/* Sliding buttons */}
          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading={<TabHeading><Text>All</Text></TabHeading>}>
              <AllTab />
            </Tab>
            <Tab heading={<TabHeading><Text>Pending</Text></TabHeading>}>
              <OfferCard
                cardTitle='Flat 50% off'
                offerID='22'
                startDate='23-02-2018'
                endDate='23-030-2018'
                offerStatus='Pending'
              />
            </Tab>
            <Tab heading={<TabHeading><Text>Approved</Text></TabHeading>}>
              <OfferCard
                cardTitle='Cashback'
                offerID='33'
                startDate='23-02-2018'
                endDate='23-030-2018'
                likeCount='23'
                grabCount="22"
                wishlistCount='2'
                offerStatus='Approved'
              />
            </Tab>
            <Tab heading={<TabHeading><Text>Disapproved</Text></TabHeading>}>
              <OfferCard
                cardTitle='Flat Rs. 100 off'
                offerID='44'
                startDate='23-02-2018'
                endDate='23-030-2018'
                offerStatus='Dispproved'
              />
            </Tab>
            <Tab heading={<TabHeading><Text>Expired</Text></TabHeading>}>
              <OfferCard
                cardTitle='Flat Rs. 100 off'
                offerID='55'
                startDate='23-02-2018'
                endDate='23-030-2018'
                offerStatus='Expired'
              />
            </Tab>
          </Tabs>
        </Content>
        {/* floating Button */}
        <View>
          <FabAdd />
        </View>
        {/* footer with tabs */}
        <Footer style={{ backgroundColor: '#C10F41' }}>
          <SellerFooter />
        </ Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  filterButton: {
    borderRadius: 0,
    borderColor: '#000000',
    borderRightWidth: 1,
  }
});