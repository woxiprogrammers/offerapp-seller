import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Entypo } from '@expo/vector-icons';
export default class FABExample extends Component {
  constructor() {
    super()
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (  
      <Container>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={Actions.addToGroupScreen}>
            <Entypo name="plus" />
          </Fab>
        </View>
      </Container>
    );
  }
}