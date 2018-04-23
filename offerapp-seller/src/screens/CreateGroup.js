import React from 'react';
import DropDownSelect from '../components/DropDownSelect';
import SellerHeader from '../components/SellerHeader';
import { TextInput, StyleSheet } from 'react-native';
import { Container, Header, View, Item, Label, Input, Text, Left, Right, Button } from 'native-base';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../styles'
import { Actions } from 'react-native-router-flux';
export default class CreateGroup extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Create Group' />
                </Header>
                <View style={{
                    paddingTop: '3%',
                    paddingLeft: '3%',
                    paddingRight: '3%'
                }}>
                    {/* Enter Group Name */}
                    <Item floatingLabel>
                        <Label>Group Name</Label>
                        <Input />
                    </Item>
                    <View style={{ paddingTop: '3%' }}>
                        <Text>Admin</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        <Left>
                            {/* Enter Admin Name */}
                            <Item floatingLabel>
                                <Label>Name</Label>
                                <Input />
                            </Item>
                        </Left>
                        <Right>
                            {/* Enter Admin Contact No. */}
                            <Item floatingLabel>
                                <Label>Contact Number</Label>
                                <Input keyboardType={'numeric'} />
                            </Item>
                        </Right>
                    </View>
                    <View>
                        <Item floatingLabel>
                            <Label>Description</Label>
                            <Input />
                        </Item>
                    </View>
                    <View style={{ paddingTop: '3%' }}>
                        <Button full
                            style={{ backgroundColor: colors.headerColor }}
                            onPress={Actions.offerListingScreen}
                        >
                            <Text>Submit</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        )
    }
}
