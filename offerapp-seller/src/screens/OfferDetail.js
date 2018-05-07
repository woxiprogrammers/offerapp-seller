import React from 'react';
import { Container, Header, Content, View, Item, H1, Text } from 'native-base';
import { Image, FlatList } from 'react-native'
import AHImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';
import { colors } from '../styles';
import SellerHeader from '../components/SellerHeader'
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {
    requestOfferDetails
} from '../actions'

export class OfferDetail extends React.Component {
    componentWillMount() {
        const {
            getOffer_id,
            token
        } = this.props;
        this.props.requestOfferDetails({ token, getOffer_id });
    }
    keyExtractor = (item, index) => { return index; };
    renderRow(offerDetails) {
        console.log("renderRow")
        console.log(offerDetails)
        const { item } = offerDetails;
        const {
            offer_id,
            seller_address_id,
            floor_no,
            seller_address,
            full_seller_address,
            offer_type_name,
            offer_status_name,
            offer_description,
            start_date,
            end_date,
        } = item;
        return (
            <Content>
                <View >
                    <AHImage
                        source={'https://static.joomlart.com/images/blog/2014/may/magento/bogo/bogo.jpg'}
                        width={responsiveWidth(100)}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        padding: '3%'
                    }}
                >
                    <H1>{offer_type_name}</H1>
                    <Text>{seller_address}</Text>
                    <Text>{full_seller_address}</Text>
                    <Text>Offer Validity </Text>
                    <Text>Start Date: {start_date}</Text>
                    <Text>End Date: {end_date} </Text>
                </View>
            </Content>
        );
    }
    render() {
        let pic = {
            uri: 'https://static.joomlart.com/images/blog/2014/may/magento/bogo/bogo.jpg'
        };
        const {
            offer_detail
        } = this.props;
            return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <SellerHeader title='Offer Detail' />
                </Header>
                    <FlatList
                        automaticallyAdjustContentInsets={false}
                        data={offer_detail}
                        refreshing={false}
                        renderItem={this.renderRow}
                        keyExtractor={this.keyExtractor}
                    />
            </Container>
        )
    }
}

function mapStateToProps({ user, offer }) {
    const { token } = user;
    const { offerDetail } = offer
    return {
        ...offerDetail,
        token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestOfferDetails: ({
            token,
            getOffer_id
        }) => {
            return (dispatch(requestOfferDetails({
                token,
                getOffer_id
            })));
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferDetail);