import React, { Component } from 'react'
import { View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Text, Content } from 'native-base'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
        <Content>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center'
                    
                }}
            >
                <Text > Start Date </ Text>
                <Text > End Date </ Text>
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
                >
                {/* Start Date */}
                <DatePicker
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                    />
                
                {/* End Date */}
                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                />
            </ View>
        </Content>
    )
  }
}