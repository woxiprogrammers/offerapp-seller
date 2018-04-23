import React from 'react';
import { Container, Header, Content, View, Item, H1, Text } from 'native-base';
import { Image } from 'react-native'
import AHImage from 'react-native-auto-height-image';

import { colors } from '../styles';
import SellerHeader from '../components/SellerHeader'
import { responsiveWidth } from 'react-native-responsive-dimensions';

export default class OfferDetail extends React.Component {
    render() {
        let pic = {
            uri: 'https://static.joomlart.com/images/blog/2014/may/magento/bogo/bogo.jpg'
        };
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <SellerHeader title='Offer Detail' />
                </Header>
                <Content>
                    <View >
                        <AHImage
                            source={pic}
                            width={responsiveWidth(100)}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            padding: '3%'
                        }}
                    >
                        <H1>Buy 1 get 1 Free</H1>
                        <Text>Shop Name</Text>
                        <Text>Shop Address</Text>
                        <Text>Offer Validity: 23/03/2018 </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}