import React, { Component } from 'react'
import { Card, CardItem, Body, Left, Text, Right, Button } from 'native-base';
import { View, StyleSheet, Platform } from 'react-native';
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight
  } from 'react-native-responsive-dimensions';
import prompt from 'react-native-prompt-android';
import { Actions } from 'react-native-router-flux';

export default class CustomerCard extends Component {
    renderGCPrompt() {
    prompt(
      'Enter Grab Code',
      "Enter customer's Grab Code to complete the transaction",
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: grabCode => console.log('OK Pressed, Grab Code: ' + grabCode) },
      ],
      {
        // type: 'numeric',
        // placeholder: 'Enter Grab Code'
      }
    );
  }

  renderGrabCodeOption() {
    if (Platform.OS === 'ios') {
      return (
        <Button small
          onPress={() => {
            { this.renderGCPrompt() }
          }}>
          <Text style={styles.TextSize}>Grab Code</Text>
        </Button>
      )

    } else if (Platform.OS === 'android') {
      return (
        <Button small
          onPress={
            Actions.grabOfferScreen
          }>
        <Text style={styles.TextSize}>Grab Code</Text>
          
        </Button>
      )
    }
  }
    render(){
        const{
            customerName,
            customerMobile,
            customerEmail
        } = this.props;
        
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
                                <Text style={styles.TextSize}>Name: {customerName} </Text>
                                <Text style={styles.TextSize}>Mobile No.: {customerMobile} </Text>
                                <Text style={styles.TextSize}>Email: {customerEmail} </Text>
                            </Left>

                            {/* Grab code Button */}
                            <Right>
                                {this.renderGrabCodeOption()}
                            </Right>
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