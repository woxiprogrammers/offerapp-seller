import React, { Component } from 'react'
import { View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Text, Content } from 'native-base'

export default class MyDatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = { startDate: "" }
        this.state = { endDate: "" }
        this.state = { currentDate: new Date().getDate }
        this.state = { currentMonth: new Date().getMonth + 1 }
        this.state = { currentYear: new Date().getFullYear }
        this.state = { todaysDate: this.state.currentDate + '-' + this.state.currentMonth + '-' + this.state.currentYear }
    }

    render() {
        // console.log(this.state.startDate);
        // console.log(this.state.endDate);
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
                        date={this.state.startDate}
                        mode="date"
                        placeholder="DD-MM-YYYY"
                        format="DD-MM-YYYY"
                        minDate={this.state.todaysDate}
                        maxDate="01-06-2019"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ startDate: date }) }}
                    />

                    {/* End Date */}
                    <DatePicker
                        date={this.state.endDate}
                        mode="date"
                        placeholder="DD-MM-YYYY"
                        format="DD-MM-YYYY"
                        minDate={this.state.startDate}
                        maxDate="01-06-2019"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ endDate: date }) }}
                    />
                </ View>
            </Content>
        )
    }
}
