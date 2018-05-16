import React from 'react';
import { Container, Header, Content, View, Item, H1, Text } from 'native-base';
import { FlatList } from 'react-native'
import { connect } from 'react-redux';
import { colors } from '../styles';
import SellerHeader from '../components/SellerHeader'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import {
    requestOfferDetails
} from '../actions'
import OfferDetailCard from '../components/offerDetailCard'

export class OfferDetail extends React.Component {
    componentWillMount() {
        const {
            getOffer_id,
            token
        } = this.props;
        this.props.requestOfferDetails({ 
            token, 
            getOffer_id 
        });
    }
    render() {
        const { offer_detail } = this.props;
        return (
            <Container style={{ marginTop: '5.8%', backgroundColor: 'white' }}>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <SellerHeader title="Offer Detail" />
                </Header>
                <Content>
                    <View >
                        <OfferDetailCard
                            offerTypeName={offer_detail.offer_type_name}
                            sellerAddress={offer_detail.seller_address}
                            fullSellerAddress={offer_detail.full_seller_address}
                            startDate={offer_detail.start_date}
                            endDate={offer_detail.end_date}
                        />
                    </View>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps({ user, offer }) {
    const { token } = user;
    const { offerDetail } = offer;
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
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferDetail);