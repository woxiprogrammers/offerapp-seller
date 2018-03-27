import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default class FabAddGroup extends Component {
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
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={Actions.createGroupScreen}>
                        <Icon name="share" />
                        <Button style={{ backgroundColor: 'green' }}
                            onPress={Actions.addToGroupScreen}
                        >
                            <MaterialIcons name="group-add" size={22} color='white' />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                        </Button>
                    </Fab>
                </View>
            </Container>
        );
    }
}