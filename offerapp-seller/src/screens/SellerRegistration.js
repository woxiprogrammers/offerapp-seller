import React from 'react';
import SellerHeader from '../components/SellerHeader'
import { Container, Item, Header, Content, View, Label, Left, Right, Input, Button, Text } from 'native-base';
import { AppRegistry, StyleSheet, TextInput } from 'react-native';
import { colors } from '../styles'
import { Actions } from 'react-native-router-flux';

export default class SellerRegistration extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '5.8%', paddingLeft: '3%', paddingRight: '3%' }}>
                <Content>
                    <View>
                        <Item floatingLabel>
                            <Label>Shop Name</Label>
                            <Input />
                        </Item>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Left style={{ paddingRight: '3%' }}>
                            <Item floatingLabel>
                                <Label>First Name</Label>
                                <Input />
                            </Item>
                        </Left>
                        <Right style={{ paddingLeft: '3%' }}>
                            <Item floatingLabel>
                                <Label>Last Name</Label>
                                <Input />
                            </Item>
                        </Right>
                    </View>
                    <View>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                    </View>
                    <View>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                    </View>
                    <View style={{ paddingTop: '3%' }}>
                        <Button
                            full
                            style={{ backgroundColor: colors.headerColor }}
                            onPress={Actions.offerListingScreen}    
                        >
                            <Text>Submit</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}