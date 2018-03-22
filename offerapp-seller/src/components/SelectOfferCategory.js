import React, { Component } from "react";
import { Dropdown } from 'react-native-material-dropdown';
import { View } from 'react-native';
export default class SelectOfferCategory extends Component {
  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
 
    return (
        <Dropdown
          label='Select Offer Category'
          data={data}
        />
    );
  }
}