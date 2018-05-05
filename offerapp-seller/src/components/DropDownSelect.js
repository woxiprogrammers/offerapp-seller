import React, { Component } from "react";
import { Dropdown } from 'react-native-material-dropdown';
import { View, Picker, StyleSheet } from 'react-native';
import { responsiveWidth } from "react-native-responsive-dimensions";
import { selectOfferType } from "../actions";
export default class SelectOfferCategory extends Component {
  render() {
    const {
      selectLabel,
      selectValue,
      selectOfferTypeArr
    } = this.props;
    console.log('Select Offer Type in Dropdown is :');
    console.log(selectOfferTypeArr);
    return (
      <Picker
        style={styles.pickerStyle}
        mode='dropdown'
      >
        {selectOfferTypeArr.map((item,i) =>{
          return (<Picker.Item
            key={i}
            label={item.offer_type_name}
            value={item.offer_type_id} />);
        })}
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