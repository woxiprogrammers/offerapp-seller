import React from 'react';
import { FlatList } from 'react-native'
import CustomerCard from '../components/CustomerCardGroupList';
import SellerHeader from '../components/SellerHeader';
import { Container, Header, Content, View } from 'native-base';
import FabAddMemberToGroup from '../components/fab/fabAddMemberToGroup';
import { connect } from 'react-redux';
import { getDetailOfGroup } from '../actions/Group/GroupMemberAction'

export class GroupMemberListing extends React.Component {
    constructor(props) {
        super(props);
        this.autoBind(
            // 'onEndReached',
            // 'onRefresh',
            'renderRow',
        );
    }
    componentWillMount() {
        const {
            token,
            getGroup_id
        } = this.props;
        const page = 1;
        this.props.getDetailOfGroup({
            token,
            getGroup_id,
            page
        });
    }
    onEndReached() {
        const {
            pagination,
            token,
        } = this.props;
        const { page, perPage, pageCount, totalCount } = pagination;
        const lastPage = totalCount <= ((page - 1) * perPage) + pageCount;
        if (!lastPage) {
            this.props.getDetailOfGroup(
                token,
                page + 1
            );
        }
    }
    onRefresh() {
        const {
            token,
        } = this.props;
        const page = 1;
        this.props.getDetailOfGroup({
            token,
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
        const { item } = offerDetails;
        const {
            customer_id,
            customer_name,
            customer_mobile,
            customer_email
        } = item;
        return (
            <View style={{ flex: 1 }}>
                <CustomerCard
                    customerName={customer_name}
                    customerMobile={customer_mobile}
                    customerEmail={customer_email}
                />
            </View>
        );
    }

    render() {
        const { getGroup_id, group_details } = this.props;
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Content>
                    <Header style={{ backgroundColor: '#C10F41' }}>
                        <SellerHeader title='Members List' />
                    </Header>
                    <View style={{ paddingLeft: '2%', paddingRight: '2%' }}>
                        <FlatList
                            automaticallyAdjustContentInsets={false}
                            data={group_details}
                            refreshing={false}
                            renderItem={this.renderRow}
                            keyExtractor={this.keyExtractor}
                        // onRefresh={() => { return this.onRefresh(); }}
                        // onEndReached={() => { return this.onEndReached(); }}
                        />
                    </View>
                </Content>
                <View>
                    <FabAddMemberToGroup />
                </View>
            </Container>
        )
    }
}
function mapStateToProps({ group, user }) {
    const { token } = user;
    const { groupMember } = group;
    return {
        ...groupMember,
        token,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDetailOfGroup: ({
            token,
            getGroup_id
            // page
        }) => {
            return dispatch(getDetailOfGroup({
                token,
                getGroup_id
                // page
            }));
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupMemberListing);