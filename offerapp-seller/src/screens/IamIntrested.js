import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Item,
    Icon,
    Input,
    Spinner
} from 'native-base';
import SellerHeader from '../components/SellerHeader';
import CustomerCard from '../components/CustomerCardGrabOffer';
import { connect } from 'react-redux';
import {
    iAmIntrestedListRequest
} from '../actions'
export class IamIntrested extends Component {
    componentWillMount() {
        const {
            token,
            getOffer_id
        } = this.props;
        this.props.iAmIntrestedListRequest({token, getOffer_id});
    }
    constructor(props) {
        super(props);
        this.autoBind(
            'onEndReached',
            'onRefresh',
            'renderRow',
        );
    }

    onEndReached() {
        const {
            token,
            getOffer_id
        } = this.props;
        this.props.iAmIntrestedListRequest({token, getOffer_id});
    }
    onRefresh() {
        const {
            token,
            getOffer_id
        } = this.props;
        this.props.iAmIntrestedListRequest({token, getOffer_id});
    }
    autoBind(...methods) {
        methods.forEach(method => {
            this[method] = this[method].bind(this);
            return this[method];
        });
    }
    keyExtractor = (item, index) => { return index; };
    renderRow(offerDetails) {
        console.log('Rendering Row');
        console.log(offerDetails);
        const { item } = offerDetails;
        const {
            customer_id,
            customer_name,
            customer_mobile,
            customer_email
        } = item;
        return (
            <CustomerCard
                customerName={customer_name}
                customerMobile={customer_mobile}
                customerEmail={customer_email}
            />
        );
    }
    renderSpinner(){
        if(this.props.isloading){
            return(
                <Spinner color='black' />
            )
        }
    }
    render() {
        const {
            customer_data
        } = this.props
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
                    {this.renderSpinner()}
                    <FlatList
                        automaticallyAdjustContentInsets={false}
                        data={customer_data}
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
        iAmIntrestedListRequest: ({
            token,
            getOffer_id
        }) => {
            return (dispatch(iAmIntrestedListRequest({
                token,
                getOffer_id
            })));
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IamIntrested);