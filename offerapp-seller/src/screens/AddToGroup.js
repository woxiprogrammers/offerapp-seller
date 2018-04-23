import React from 'react';
import {
    Container,
    Header,
    Footer,
    Content,
    Form,
    Item,
    Label,
    Input,
    Button,
    Text,
    View
} from 'native-base';
import { FlatList } from 'react-native'
import SellerHeader from '../components/SellerHeader';
import DropDownSelect from '../components/DropDownSelect'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { selectGroup, mobileNumber } from '../actions/AddToGroupAction';

export class AddtoGroup extends React.Component {
    constructor(props) {
        super(props);
        this.autoBind(
            'renderRow',
        );
    }
    autoBind(...methods) {
        methods.forEach(method => {
            this[method] = this[method].bind(this);
            return this[method];
        });
    }
    componentWillMount() {
        const {
            token,
        } = this.props;
        console.log('Mounting select Group');
        this.props.selectGroup({
            token
        })
    }

    onMobileNumberChange(text) {
        console.log(this.props.mobileNumber(text));
    }

    keyExtractor = (item, index) => { return index; };
    renderRow(offerDetails) {
        // console.log('Rendering Row');
        // console.log(offerDetails);
        // console.log(offerDetails);
        const { item } = offerDetails;
        console.log("ADD to group render row")
        console.log(item)
        const {
            group_id,
            group_name,
            total_member,
        } = item;
        return (
            <View>
                <DropDownSelect
                    selectLabel="Select Group"
                    // selectValues={group_name}
                />
            </View>
        );
    }

    render() {
        const { select_groups } = this.props;
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title=" Add to Group " />
                </Header>
                <Form>
                    <View
                        style={{ paddingLeft: '3%', paddingRight: '3%', paddingTop: '3%' }}
                    >
                        {/* Enter MObile NUmber */}
                        <Item floatingLabel>
                            <Label>Mobile Number</Label>
                            <Input keyboardType={'numeric'}
                                onChangeText={this.onMobileNumberChange.bind(this)}
                            />
                        </Item>
                        {/* Select Group */}
                        <DropDownSelect
                            selectLabel="Select Group"
                            selectValues={groups}
                        />
                        <FlatList
                            automaticallyAdjustContentInsets={false}
                            data={select_groups}
                            refreshing={false}
                            renderItem={this.renderRow}
                            keyExtractor={this.keyExtractor}

                        />
                        <Button block danger
                            style={{ backgroundColor: '#C10F41', borderRadius: 0 }}
                            onPress={Actions.offerListingScreen}
                        >
                            <Text>Send Invitation</Text>
                        </Button>
                    </View>
                </ Form>
            </ Container>
        )
    }
}
function mapStateToProps({ selectGroup, user }) {
    const { token } = user;
    return {
        ...selectGroup,
        token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        selectGroup: ({
            token,

        }) => {
            return dispatch(selectGroup({
                token,
            }));
        },
        selectGroup: (text) => {
            return dispatch(selectGroup(text));
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddtoGroup);