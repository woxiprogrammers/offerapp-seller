import React, { Component } from 'react';
import {FlatList } from 'react-native';
import { Container, Header, Content, Item, Icon, Input } from 'native-base';
import SellerHeader from '../components/SellerHeader'
import CustomerCard from '../components/CustomerCardGrabOffer'
export default class IamIntrested extends Component {
    render() {
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Customer List' />
                </Header>
                <Content>
                    {/* seacrh bar
                    <Item regular>
                        <Icon active name='ios-search' />
                        <Input placeholder='Search' />
                    </Item> */}
                    <CustomerCard
                        customerName='Mayur'
                        customerMobile='9999999999'
                        customerEmail='mayur.woxi@gmail.com'
                    />
                    <FlatList
                        automaticallyAdjustContentInsets={false}
                        data={offer_list}
                        refreshing={false}
                        renderItem={this.renderRow}
                        keyExtractor={this.keyExtractor}
                        onRefresh={() => { return this.onRefresh(); }}
                        onEndReached={() => { return this.onEndReached(); }}
                    />
                </Content>
            </Container>
        )
    }
}