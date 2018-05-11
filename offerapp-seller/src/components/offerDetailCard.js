import React from 'react';
import { Container, Header, Content, View, Item, H1, Text, CardItem, Body, Card } from 'native-base';
import { Image, FlatList } from 'react-native'
import AHImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';
import { colors } from '../styles';
import SellerHeader from '../components/SellerHeader'
import { responsiveWidth } from 'react-native-responsive-dimensions';

export default class OfferDetailCard extends React.Component {
    render() {
        const {
            offerTypeName,
            sellerAddress,
            fullSellerAddress,
            startDate,
            endDate
        } = this.props;
        // let pic = {
        //     uri: 'https://static.joomlart.com/images/blog/2014/may/magento/bogo/bogo.jpg'
        // };
        return (
            <View>
                <Card >
                    <CardItem>
                        <Body>
                            
                                {/* <View >
                                    <AHImage
                                        source={'https://static.joomlart.com/images/blog/2014/may/magento/bogo/bogo.jpg'}
                                        width={responsiveWidth(100)}
                                    />
                                </View> */}
                                <View
                                   
                                >
                                    <H1>{offerTypeName}</H1>
                                    <Text style={{fontWeight: 'bold'}}>{sellerAddress}</Text>
                                    <Text style={{fontWeight: 'bold'}}>Address:</Text>
                                    <Text>{fullSellerAddress}</Text>
                                    <Text style={{fontWeight: 'bold'}}>Offer Validity </Text>
                                    <Text>Start Date: {startDate}</Text>
                                    <Text>End Date: {endDate} </Text>
                                </View>
                            
                        </Body>
                    </CardItem>
                </Card>
            </View>
        )
    }
}
