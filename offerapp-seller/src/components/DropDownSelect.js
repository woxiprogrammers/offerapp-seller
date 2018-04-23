import React, { Component } from "react";
import { Dropdown } from 'react-native-material-dropdown';
import { View, Picker, StyleSheet } from 'react-native';
import { responsiveWidth } from "react-native-responsive-dimensions";
export default class SelectOfferCategory extends Component {
  render() {
    const{
      selectLabel
    } = this.props;
    return (
      <Picker
        style={pickerStyle}
        mode='dropdown'
        selectedValue={selectLabel}
      >
        <Picker.Item label="+91" value="+91" />
      </Picker>
    );
  }
}
const styles = StyleSheet.create({
  pickerStyle: {
    width: responsiveWidth(20),
    paddingBottom: 10,
    marginTop: 10,
  }
})