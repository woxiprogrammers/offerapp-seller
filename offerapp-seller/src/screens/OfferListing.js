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
  Footer,
  Tab,
  Tabs ,
  TabHeading,
  ScrollableTab
} from 'native-base';
  import OfferCard from '../components/OfferCard';
  import SellerHeader from '../components/SellerHeader';
  import FabAdd from '../components/FabAdd';
  import SellerFooter from '../components/SellerFooter';


export default class OfferListing extends Component {
  render() {
    return (
      
      <Container>
        <Header style={{backgroundColor: '#C10F41'}} hasTabs>
          <SellerHeader title='Welcome'/>
        </ Header >                 
        <Content>  
          {/* seacrh bar */}
          <Item regular>
           <Icon active name='ios-search' />
           <Input placeholder='Search'/>
        </Item>
           {/* Sliding buttons */}      
          <Tabs renderTabBar={()=> <ScrollableTab />}>
             
            <Tab heading={ <TabHeading><Text>All</Text></TabHeading>}>
              <OfferCard />
            </Tab>
            <Tab heading={ <TabHeading><Text>Pending</Text></TabHeading>}>
              <OfferCard />
            </Tab>
            <Tab heading={ <TabHeading><Text>Approved</Text></TabHeading>}>
              <OfferCard />        
            </Tab>
            <Tab heading={ <TabHeading><Text>Disapproved</Text></TabHeading>}>
              <OfferCard />
            </Tab>
          </Tabs>
          
        </Content>

        {/* floating Button */}
        <View style = {{paddingBottom: 8}}>
          <FabAdd />
        </View>
          {/* footer with tabs */}
          <Footer style={{backgroundColor: '#C10F41'}}>
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