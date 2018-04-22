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
import AllTab from './StatusTabs/AllTab';
import PendingTab from './StatusTabs/PendingTab';
import ApproveTab from './StatusTabs/ApproveTab';
import DisapproveTab from './StatusTabs/DisapproveTab';
import ExpireTab from './StatusTabs/ExpireTab';

export default class OfferListing extends Component {
  render() {
    return (
      <Container style={{ marginTop: '5.8%' }}>
        <Header style={{ backgroundColor: colors.headerColor, }} hasTabs >
          <SellerHeader title='Welcome' />
        </ Header >

        <Content >
          {/* seacrh bar */}
          {/* <Item regular>
            <Icon active name='ios-search' />
            <Input placeholder='Search' />
          </Item> */}
          {/* Sliding buttons */}
          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading={<TabHeading><Text>All</Text></TabHeading>}>
              <AllTab />
            </Tab>
            <Tab heading={<TabHeading><Text>Pending</Text></TabHeading>}>
              <PendingTab />
            </Tab>
            <Tab heading={<TabHeading><Text>Approved</Text></TabHeading>}>
              <ApproveTab />
            </Tab>
            <Tab heading={<TabHeading><Text>Disapproved</Text></TabHeading>}>
              <DisapproveTab />
            </Tab>
            <Tab heading={<TabHeading><Text>Expired</Text></TabHeading>}>
              <ExpireTab />
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