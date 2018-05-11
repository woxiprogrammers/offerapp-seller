import React from 'react';
import {
    ScrollView,
    // KeyboardAvoidingView
} from 'react-native'
import {
    Container,
    Header,
    Form,
    Item,
    Label,
    Input,
    Text,
    View,
    Left,
    Right,
    Button,
} from 'native-base';
import SellerHeader from '../components/SellerHeader';
import DropDownSelect from '../components/DropDownSelect'
import { colors } from '../styles'
import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';
export default class AccountInfo extends React.Component {
    render() {
        let data = [{
            value: '0',
        }, {
            value: '1',
        }, {
            value: '2',
        }];

        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Account Information' />
                </Header>

                {/* <KeyboardAvoidingView
                    behavior="padding"
                > */}
                <ScrollView>
                    <Form style={{ paddingLeft: '2%', paddingRight: '2%' }}>
                        {/* Enter Shop Name */}
                        <View>
                            <Item floatingLabel>
                                <Label>Shop Name</Label>
                                <Input />
                            </Item>
                        </View>

                        {/* Enter Full Name */}
                        <View style={{ paddingTop: '3%' }}>
                            <Text>Full Name</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            {/* First Name */}
                            <Left>
                                <Item floatingLabel>
                                    <Label>First Name</Label>
                                    <Input />
                                </Item>
                            </Left>
                            {/* Last Name */}
                            <Right>
                                <Item floatingLabel>
                                    <Label>Last Name</Label>
                                    <Input />
                                </Item>
                            </Right>
                        </View>

                        {/* Contact Information */}
                        <View style={{ paddingTop: '3%' }}>
                            <Text>Contact Information</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            {/* LandLine Number */}
                            <Left>
                                <Item floatingLabel>
                                    <Label>Landline Number</Label>
                                    <Input keyboardType={'numeric'} />
                                </Item>
                            </Left>
                            {/* Mobile Number */}
                            <Right>
                                <Item floatingLabel>
                                    <Label>Mobile Number</Label>
                                    <Input keyboardType={'numeric'} />
                                </Item>
                            </Right>
                        </View>

                        {/* Address */}
                        <View style={{ paddingTop: '3%' }}>
                            <Text>Address</Text>
                        </View>
                        <View>
                            <Dropdown
                                label='Select Floor'
                                data={data}
                            />
                            <Item floatingLabel>
                                <Label>Shop Number / Building Name</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Colony / Street / Locality</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Left>
                                <Item floatingLabel>
                                    <Label>Landmark</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>City</Label>
                                    <Input />
                                </Item>
                            </Left>
                            <Right>
                                <Item floatingLabel>
                                    <Label>Pincode</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>State</Label>
                                    <Input />
                                </Item>
                            </Right>
                        </View>
                        {/* Types of payments */}
                        {/* <View>
                                <DropDownSelect selectLabel="Select Type of Payment" />
                            </View> */}

                        {/* Upload shop images */}
                        <View style={{ paddingTop: '3%' }}>
                            <Text>Photos</Text>
                        </View>
                        <View>
                            <Button>
                                <Text>Select</Text>
                            </Button>
                        </View>
                        <View style={{ paddingTop: '3%' }}>
                            <Button full style={{ backgroundColor: '#C10F41' }}
                                onPress={Actions.offerListingScreen}
                            >
                                <Text style={{ color: 'white' }}>Submit</Text>
                            </Button>
                        </View>
                    </Form>
                </ScrollView>
                {/* </KeyboardAvoidingView> */}
            </Container>
        );
    }
}