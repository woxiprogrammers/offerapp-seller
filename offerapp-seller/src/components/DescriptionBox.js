import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Container, Content, Text } from 'native-base'
export default class DescriptionBox extends Component {
  render() {
    return (
        <Container>
              {/* Offer Description */}
              <Content>
                <View style={{paddingLeft:10, paddingRight: 10, flexDirection: 'column', alignContent: 'center'}}>
                    <TextInput
                        placeholder = 'Enter offer description'
                        editable = {true}
                        maxLength = {40}
                        style= {styles.descriptionBox}
                    />
                </View>
              </Content>
        </ Container>
    );
  }
}

const styles = StyleSheet.create({
  descriptionBox:{
    flex: 1,
    alignContent: 'center',
    height: height(20), // 70% of height device screen
    width: width(80), // 80% of width device screen
    borderColor: 'black', 
    borderWidth: 1, 
    
  },
  });