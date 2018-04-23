import React, { Component } from 'react'
import { Card, CardItem, Body, Left, Text, Right, Button } from 'native-base';
import { View, StyleSheet } from 'react-native';
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight
  } from 'react-native-responsive-dimensions';
import prompt from 'react-native-prompt-android';

export default class CustomerCard extends Component {
    render(){
        return(
            <Card>
                <CardItem>
                    <Body>
                        <View style={{
                            flexDirection: 'row'
                        }}
                        >
                        {/* Customer Details */}
                            <Left>
                                <Text style={styles.TextSize}>Name: {this.props.customerName} </Text>
                                <Text style={styles.TextSize}>Mobile No.: {this.props.customerMobile} </Text>
                                <Text style={styles.TextSize}>Email: {this.props.customerEmail} </Text>
                            </Left>
                        </View>
                    </ Body>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    TextSize:{
        fontSize: responsiveFontSize(2)
    }
})