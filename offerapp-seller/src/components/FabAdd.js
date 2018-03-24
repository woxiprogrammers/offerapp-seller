import React, { Component } from 'react';
import { View, 
    StyleSheet, } from 'react-native';
import { Container, 
    Button, 
    Fab, } from 'native-base';
    import {
      StackNavigator,
    } from 'react-navigation';
    
  import { Ionicons, MaterialIcons } from '@expo/vector-icons';
  import { Actions } from 'react-native-router-flux';

export default class OfferListing extends Component {
  constructor() {
    super()
    this.state = {
      active: 'true'
    };
  }
   render() {
    return (
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Ionicons name="md-add" size={32}  />
                
                <Button style={{ backgroundColor: 'green' }}
                onPress={Actions.AddToGroupScreen}
                >
                <MaterialIcons name="group-add" size={22} color='white'/>
                </Button>

                <Button  style={{ backgroundColor: 'blue' }} 
                  onPress = {Actions.CreateOfferScreen}>
                  <MaterialIcons name="local-offer" size={22} color='white'/>
                </Button>
            </Fab>
    );
  }
}

