import React, { Component } from 'react'
import { View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import { Dropdown } from 'react-native-material-dropdown';
import { Button, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { colors } from '../styles'
const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

export default class MultiSelectDropDown extends Component {
    state = { selectedFruits: [] }

    onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedFruits })
        console.log({ selectedFruits })
    }

    render() {
        return (
            <View style={{
                marginTop: '5.8%',
                paddingLeft: '3%',
                paddingRight: '3%'
            }}>

                <SelectMultiple
                    items={fruits}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />
                <View
                    style={{
                        paddingTop: '3%'
                    }}
                >
                    <Button
                        full
                        style={{
                            backgroundColor: colors.headerColor,

                        }}
                        onPress={Actions.promoteOfferScreen}
                    >
                        <Label style={{ color: 'white' }}>Submit</Label>
                    </Button>
                </View>
            </View>
        )
    }
}