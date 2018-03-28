import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';


export default class FabAddGroup extends Component {

    render() {
        return (
            <View style={{ flex: 1, }}>
                {/* Rest of the app comes ABOVE the action button component !*/}
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Add to group" onPress={Actions.addToGroupScreen}>
                        <MaterialIcons name="group-add" size={22} style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Create Offer" onPress={Actions.createOfferScreen}>
                        <MaterialIcons name="local-offer" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
