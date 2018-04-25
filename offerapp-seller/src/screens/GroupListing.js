import React from 'react';
import { FlatList } from 'react-native';
import SellerHeader from '../components/SellerHeader';
import { Container, Header, View, Content } from 'native-base';
import GroupDetailCard from '../components/GroupDetailCard';
import FabAddGroup from '../components/fab/FabAddGroup';
import { Actions } from 'react-native-router-flux';
import { getListOfGroup } from '../actions/Group/ListGroupAction';
import { connect } from 'react-redux';

export class GroupListing extends React.Component {
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
        } = this.props;
        const page = 1;
        console.log('Mounting GROUP LisTT');
        this.props.getListOfGroup({
            token,
            // page
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
            this.props.getlistOfGroup(
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
        this.props.getlistOfGroup({
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
        // console.log('Rendering Row');
        // console.log(offerDetails);
        // console.log(offerDetails);
        const { item } = offerDetails;
        const {
            group_id,
            group_name,
            total_member,
        } = item;
        return (
            <View>
                <GroupDetailCard
                    groupName={group_name}
                    totalMembers={total_member}
                    onPress={Actions.offersSentScreen}
                />
            </View>
        );
    }
    render() {
        const { select_groups } = this.props;
        console.log(select_groups)
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Group List' />
                </Header>

                {/* Group Detail Card */}
                <Content>
                    <FlatList
                        automaticallyAdjustContentInsets={false}
                        data={select_groups}
                        refreshing={false}
                        renderItem={this.renderRow}
                        keyExtractor={this.keyExtractor}
                        onRefresh={() => { return this.onRefresh(); }}
                        onEndReached={() => { return this.onEndReached(); }}
                    />
                </Content>
                <View>
                    <FabAddGroup />
                </View>
            </Container>
        )
    }
}
function mapStateToProps({ group, user }) {
    const { token } = user;
    const { listGroup } = group;
    return {
        ...listGroup,
        token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getListOfGroup: ({
            token,
            // page
        }) => {
            return dispatch(getListOfGroup({
                token,
                // page
            }));
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupListing);
