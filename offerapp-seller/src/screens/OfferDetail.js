import React from 'react';
import { Container, Header, Content, View, Item } from 'native-base';
import { Image } from 'react-native'
import { colors } from '../styles';
import SellerHeader from '../components/SellerHeader'

export default class OfferDetail extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <SellerHeader title='Offer Detail' />
                </Header>
                <Content>
                    <View style={{ paddingTop: '3%', height: '25%' }}>
                        <Image source={pic} style={{ width: '100%', height: 110 }} />
                    </View>
                </Content>
            </Container>
        )
    }
}