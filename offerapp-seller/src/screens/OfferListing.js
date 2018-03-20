import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, 
  Header,
  Content, 
  Button, 
  Text, 
  Left, 
  Right, 
  Icon,
  Title,
  Body,
  Item,
  Input,
  Card,
  CardItem,
  Fab,
  Footer, 
  FooterTab, } from 'native-base';
  import OfferCard from '../components/OfferCard';
  import { Ionicons, FontAwesome, MaterialIcons, EvilIcons } from '@expo/vector-icons';


export default class OfferListing extends Component {
  constructor() {
    super()
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#C10F41'}}>
        <Left>
            <Button transparent>
              <Icon name='menu' style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Offers</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='md-notifications' style={{color:'yellow'}}/>
            </Button>
          </Right>
        </ Header>
        
        {/* Sliding buttons */}
        <Content>
          <View style={{
            flex: 1,
            flexDirection: 'row'}}>
              <ScrollView horizontal>
                <Button bordered dark ><Text> All </Text></Button>
                <Button bordered dark ><Text> Pending </Text></Button>
                <Button bordered dark ><Text> Approved </Text></Button>
                <Button bordered dark ><Text> Disapproved </Text></Button>
              </ ScrollView>
          </View>

          {/* seacrh bar */}
          <Item regular>
           <Icon active name='ios-search' />
           <Input placeholder='Search'/>
        </Item>

        {/* offer cards */}
       
        <Card>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
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
                <FontAwesome name="heart" size={22} color='red' />
                <EvilIcons name="like" size={30}  />
                <FontAwesome name="handshake-o" size={22} />
              </View>
            </CardItem>
         </Card>
        
        </Content>
        <View style={{paddingBottom: 23}}>

        {/* floating Button */}
        <Fab
            containerStyle={{paddingBottom: '30'}}
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Ionicons name="md-add" size={32}  />
            <Button style={{ backgroundColor: 'green' }}>
              <MaterialIcons name="group-add" size={22} color='white'/>
            </Button>
            <Button  style={{ backgroundColor: 'blue' }}>
              <MaterialIcons name="local-offer" size={22} color='white'/>
            </Button>
          </Fab>
          </View>

          {/* footer with tabs */}
        <Footer style={{backgroundColor: '#C10F41'}}>
          <FooterTab>
          <Button vertical>
              <FontAwesome name="handshake-o" size={22} color='white' />
              <Text style={{color:'white'}}>Grab Offer</Text>
            </Button>
            <Button vertical color='white'>
              <FontAwesome name="filter" size={22}  style={{color:'white'}}/>  
              <Text style={{color:'white'}}>Filter</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
