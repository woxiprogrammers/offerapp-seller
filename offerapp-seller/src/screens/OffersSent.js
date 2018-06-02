import React from 'react'
import SellerHeader from '../components/SellerHeader'
import {
    Container,
    Header,
    View,
    Card,
    CardItem,
    H1,
    H3,
    Content,
    Text,
    Left,
    Spinner
} from 'native-base';
import {
    Image,
    FlatList
} from 'react-native';
import { colors } from '../styles';
import AHImage from 'react-native-auto-height-image';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {
    connect
} from 'react-redux';
import {
    requestGroupOffers,
    groupOfferRecieved,
    groupOfferNotRecieved
} from '../actions/Offer/OffersSentAction';

export class OffersSent extends React.Component {
    constructor(props) {
        super(props);
        this.autoBind(
            'onEndReached',
            'onRefresh',
            'renderRow',
        );
    }

    componentWillMount() {
        const {
            token,
            getGroup_id
        } = this.props;
        this.props.requestGroupOffers({
            token,
            getGroup_id
        });
    }

    onEndReached() {
        const {
            pagination,
            token,
            getGroup_id,
          } = this.props;
          const { perPage, pageCount, totalCount } = pagination;
          let { page } = pagination;
          const lastPage = totalCount <= ((page - 1) * perPage) + pageCount;
          if (!lastPage) {
            page += 1;
            this.props.offerList({ token, getGroup_id, page });
          }
    }
    onRefresh() {
     
        const {
            token,
            getGroup_id,
          } = this.props;
          const page = 1;
          this.props.requestGroupOffers({
            token,
            getGroup_id,
            page
          });
    }
    autoBind(...methods) {
        methods.forEach(method => {
            this[method] = this[method].bind(this);
            return this[method];
        });
    }
    keyExtractor = (item, index) => { return index; };
    renderRow(offerDetails) {
        console.log("RENDER ROW")
        console.log(offerDetails)
        const { item } = offerDetails;
        const {
            offer_type_name
        } = item;
        if (this.props.isLoading) {
            return (
                <View style={{paddingTop: '50%'}}>
                    <Spinner color='black' />
                </View>
            )
        } else {
            return (
                <View>
                    <Card>
                        <CardItem header>
                            <View
                                style={{
                                    flexDirection: 'column'
                                }}
                            >
                                <Left>
                                    <H1>{offer_type_name}</H1>
                                </Left>
                            </View>
                        </CardItem>
                        {/* <CardItem cardBody>
                        <AHImage
                            source={'https://static.joomlart.com/images/blog/2014/may/magento/bogo/bogo.jpg'}
                            width={responsiveWidth(100)}
                        />
                    </CardItem> */}
                    </Card>
                </View>
            );
        }
    }

    render() {
        // let pic = {
        //     uri: 'https://static.joomlart.com/images/blog/2014/may/magento/bogo/bogo.jpg'
        // };
        const {
            group_offers
        } = this.props;
        console.log(group_offers)
        return (
            <Container>
                <Header style={{ backgroundColor: colors.headerColor }}>
                    <SellerHeader title='Group Offers' />
                </Header>
                <Content>
                    <View>
                        <FlatList
                            automaticallyAdjustContentInsets={false}
                            data={group_offers}
                            refreshing={false}
                            renderItem={this.renderRow}
                            keyExtractor={this.keyExtractor}
                            onRefresh={() => { return this.onRefresh(); }}
                            onEndReached={() => { return this.onEndReached(); }}
                        />
                    </ View>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps({ user, offer }) {
    const { token } = user;
    const { offersSent } = offer;
    return {
        ...offersSent,
        token
    }
}
function mapDispatchToProps(dispatch) {
    return {
        requestGroupOffers: ({
            token,
            getGroup_id
        }) => {
            return dispatch(requestGroupOffers({
                token,
                getGroup_id
            }));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(OffersSent);