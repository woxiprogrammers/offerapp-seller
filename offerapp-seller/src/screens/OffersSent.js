import React from 'react'
import SellerHeader from '../components/SellerHeader'
import { Container, Header, View, Card, CardItem, H1, H3, Content, Text, Left } from 'native-base';
import { Image } from 'react-native';
import { colors } from '../styles'
import AHImage from 'react-native-auto-height-image';
import { responsiveWidth } from 'react-native-responsive-dimensions';
export default class OffersSent extends React.Component {
    render() {
        let pic = {
            uri: 'https://static.joomlart.com/images/blog/2014/may/magento/bogo/bogo.jpg'
        };
        return (
            <Container>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <SellerHeader title='Group Offer Lisiting' />
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <View
                                style={{
                                    flexDirection: 'column'
                                }}
                            >
                                <Left>
                                    <H1>Buy 1 get 1 free</H1>
                                    <Text>Kothrud, Pune</Text>
                                </Left>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                        <AHImage
                            source={pic}
                            width={responsiveWidth(100)}
                        />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}