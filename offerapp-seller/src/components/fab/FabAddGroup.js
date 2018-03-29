// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { Actions } from 'react-native-router-flux';


// export default class FabAddGroup extends Component {

//     render() {
//         return (
//             <View style={{ flex: 1, }}>
//                 {/* Rest of the app comes ABOVE the action button component !*/}
//                 <ActionButton buttonColor="rgba(231,76,60,1)">
//                     <ActionButton.Item buttonColor='#9b59b6' title="Add to group" onPress={Actions.addToGroupScreen}>
//                         <MaterialIcons name="group-add" size={22} style={styles.actionButtonIcon} />
//                     </ActionButton.Item>
//                     <ActionButton.Item buttonColor='#3498db' title="Create Group" onPress={Actions.createGroupScreen}>
//                         <FontAwesome name="group" style={styles.actionButtonIcon} />
//                     </ActionButton.Item>
//                 </ActionButton>
//             </View>
//         );
//     }

// }

// const styles = StyleSheet.create({
//     actionButtonIcon: {
//         fontSize: 20,
//         height: 22,
//         color: 'white',
//     },
// });

import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
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
                        style={{ backgroundColor: '#E74C3C' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Ionicons name="md-add" size={32}  />
                        <Button
                            style={{ backgroundColor: '#9b59b6' }}
                            onPress={Actions.addToGroupScreen}
                        >
                            <MaterialIcons name="group-add" size={22} style={{color: 'white'}}/>
                        </Button>
                        <Button
                            style={{ backgroundColor: '#3498db' }}
                            onPress={Actions.createGroupScreen}
                        >
                            <FontAwesome name="group"  style={{color: 'white'}} />
                        </Button>
                    </Fab>
                </View>
            </Container>
        );
    }
}