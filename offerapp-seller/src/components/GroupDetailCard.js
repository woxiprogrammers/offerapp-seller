import React, { Component } from 'react'
import { Card, CardItem, Body, Left, Text, Right, Button, Badge } from 'native-base';
import { View, StyleSheet } from 'react-native';
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight
} from 'react-native-responsive-dimensions';
import prompt from 'react-native-prompt-android';
import { Actions } from 'react-native-router-flux';

export default class GroupDetailCard extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <View style={{
                            flexDirection: 'row'
                        }}
                        >
                            {/* Group Details */}
                            <Left>
                                <Text style={styles.TextSize}>Group No.: {this.props.groupNumber} </Text>
                                <Text style={styles.TextSize}>Group Name: {this.props.groupName} </Text>
                                <Text style={styles.TextSize}>Total Members: {this.props.totalMembers} </Text>
                            </Left>

                            <View
                                style={{
                                    justifyContent: 'flex-end'
                                }}
                            >
                                {/* i Button */}
                                <Right>
                                    <Button small rounded
                                        onPress={Actions.groupMemberListingScreen}
                                    >
                                        <Text>i</Text>
                                    </Button>
                                </Right>
                            </View>
                        </View>
                    </ Body>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    TextSize: {
        fontSize: responsiveFontSize(2)
    }
})