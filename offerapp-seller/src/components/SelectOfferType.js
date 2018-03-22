import React, { Component } from "react";
import { Dropdown } from 'react-native-material-dropdown';
import { View } from "native-base";
 
export default class SelectOfferType extends Component {
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
                label='Select Offer Type'
                data={data}
            />
    );
  }
}