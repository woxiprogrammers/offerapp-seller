import React, { Component } from 'react';
import { Container, 
  Button, 
  Text,  
  Footer,
  FooterTab, } from 'native-base';
  import { FontAwesome } from '@expo/vector-icons';


export default class SelelrFooter extends Component {
  render() {
    return (
      
      <Container>
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
          </ Footer>
      </Container>
    );
  }
}
