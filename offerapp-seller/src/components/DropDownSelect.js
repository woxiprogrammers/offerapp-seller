import React, { Component } from "react";
import { Dropdown } from 'react-native-material-dropdown';
import { View, Picker, StyleSheet } from 'react-native';
import { responsiveWidth } from "react-native-responsive-dimensions";
export default class SelectOfferCategory extends Component {
  render() {
    const{
      selectLabel,
      selectValue
    } = this.props;
    return (
      <Picker
        style={styles.pickerStyle}
        mode='dropdown'
      >
        <Picker.Item label={selectLabel} value={selectValue} />
      </Picker>
    );
  }
}
const styles = StyleSheet.create({
  pickerStyle: {
    width: responsiveWidth(95),
    paddingBottom: 10,
    marginTop: 10,
  }
})