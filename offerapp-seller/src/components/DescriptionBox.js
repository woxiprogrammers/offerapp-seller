<Text style={{paddingBottom: 10, paddingTop: 10}}>Upload Photos</ Text>
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import {  Content, Text } from 'native-base'
export default class DescriptionBox extends Component {
  render() {
    return (
            <View style={{
              paddingLeft:10, 
              paddingRight: 10, 
              flexDirection: 'column', 
              alignContent: 'center'}}>
                    <TextInput
                        editable = {true}
                        maxLength = {40}
                        style= {styles.descriptionBox}
                    />
            </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionBox:{
    flex: 1,
    height: height(20), // 20% of height device screen
    width: width(86), // 86% of width device screen
    borderColor: 'black', 
    borderWidth: 1, 
  },
});