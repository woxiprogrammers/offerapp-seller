import React, { Component } from 'react';
import { View, 
    StyleSheet, } from 'react-native';
import { Container, 
    Button, 
    Fab, } from 'native-base';
 ;
  import { Ionicons, MaterialIcons } from '@expo/vector-icons';


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
      </Container>
    );
  }
}

