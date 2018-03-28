import React from 'react';
import { Container, Header } from 'native-base';
import { Image } from 'react-native'
import { colors } from '../styles';
import SellerHeader from '../components/SellerHeader'


    
export default class OfferDetail extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
        return (
            <Container>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <SellerHeader title='Offer Detail' />
                </Header>
                <Image source={pic} style={{paddingTop:'3%', width: "100%", height: "25%"}}/>
            </Container>
        )
    }
}