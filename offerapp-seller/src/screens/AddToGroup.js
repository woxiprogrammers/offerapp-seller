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
import {
    FlatList,
    Picker,
    StyleSheet
} from 'react-native'
import SellerHeader from '../components/SellerHeader';
import DropDownSelect from '../components/DropDownSelect'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    requestGroupList,
    selectedGroupid,
    getMobileNumber,
    requestAddToGroup
} from '../actions/AddToGroupAction';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export class AddtoGroup extends React.Component {

    componentWillMount() {
        const {
            token,
        } = this.props;
        console.log('Mounting select Group');
        this.props.requestGroupList({
            token
        })
    }

    onMobileNoChange(text) {
        this.props.getMobileNumber(text)
    }

    onButtonPress() {
        const { mobile_no, group_id, token } = this.props;
        this.props.requestAddToGroup({
            token,
            mobile_no,
            group_id
        })
    }
    render() {
        const { select_group } = this.props;
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
                                returnKeyType={ 'done' }
                                onChangeText={this.onMobileNoChange.bind(this)}
                                value={this.props.mobile_no}
                            />
                        </Item>
                        {/* Select Group */}
                        <Picker
                            style={styles.pickerStyle}
                            mode='dropdown'
                            placeholder="Select Group"
                            selectedValue={this.props.group_id}
                            onValueChange={(itemValue, itemIndex) => {
                                this.props.selectedGroupid(itemValue);
                            }}
                        >
                            {select_group.map((item, i) => {
                                return (<Picker.Item
                                    key={i}
                                    value={item.group_id}
                                    label={item.group_name}
                                />);
                            })}
                        </Picker>


                        <Button block danger
                            style={{ backgroundColor: '#C10F41', borderRadius: 0 }}
                            onPress={this.onButtonPress.bind(this)}
                        >
                            <Text>Send Invitation</Text>
                        </Button>
                    </View>
                </ Form>
            </ Container>
        )
    }
}

const styles = StyleSheet.create({
    pickerStyle: {
        width: responsiveWidth(95),
        paddingBottom: 10,
        marginTop: 10,
    }
})

function mapStateToProps({ addToGroup, user }) {
    const { token } = user;
    return {
        ...addToGroup,
        token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestGroupList: ({
            token,

        }) => {
            return dispatch(requestGroupList({
                token,
            }));
        },
        selectedGroupid: (text) => {
            return dispatch(selectedGroupid(text));
        },
        getMobileNumber: (text) => {
            return dispatch(getMobileNumber(text));
        },
        requestAddToGroup: ({
            token,
            mobile_no,
            group_id
        }) => {
            return dispatch(requestAddToGroup({
                token,
                mobile_no,
                group_id
            }));
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddtoGroup);