import React from 'react';
import SellerHeader from "../components/SellerHeader";
import {
    Container,
    Header,
    View,
    Form,
    Button,
    Text,
    Spinner
} from 'native-base';
import {
    Picker,
    StyleSheet,
    ScrollView
} from 'react-native'
import DropDownSelect from '../components/DropDownSelect'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    requestOfferList,
    requestGroupListToPromote,
    selectedGroupid,
    selectedOfferTypeid,
    requestPromoteOffer,
    seledtedGroups
} from '../actions/Offer/PromoteOfferAction'
import { responsiveWidth } from 'react-native-responsive-dimensions';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
export class PromoteOffer extends React.Component {
    componentWillMount() {
        const {
            token,
            status
        } = this.props;
        this.props.requestOfferList({ token, status });
        this.props.requestGroupListToPromote({ token })
    }
    onButtonPress() {
        const {
            token,
            offer_id,
            selected_group_id
        } = this.props;
        this.props.requestPromoteOffer({
            token,
            offer_id,
            selected_group_id
        })
    }
    constructor() {
        super()
        this.state = {
            selectedItems: [],
        }
    }
    onSelectedItemsChange = (selectedItems) => {
        const {
            selected_group_id
        } = this.props;
        this.props.seledtedGroups(selectedItems)
    }

    renderNotifyButton() {
        if (this.props.sendingNotification) {
            return (
                <Button full
                    style={{ backgroundColor: '#C10F41' }}
                >
                    <Spinner color='white' />
                </Button>
            )

        } else {
            return (
                <Button full
                    style={{ backgroundColor: '#C10F41' }}
                    onPress={this.onButtonPress.bind(this)}
                >
                    <Text>Nofity</Text>
                </Button>
            )

        }
    }
    render() {
        const {
            offer_list,
            select_group
        } = this.props;
        console.log(this.props.selected_group_id)
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Promote Offer' />
                </Header>
                <ScrollView>
                    <Form style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                        <View>
                            <Text>Select Offer To Promote</Text>
                            {/* Select offer Type */}
                            <Picker
                                style={styles.pickerStyle}
                                mode='dropdown'
                                selectedValue={this.props.offer_id}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.props.selectedOfferTypeid(itemValue);
                                }}
                            >
                                {offer_list.map((item, i) => {
                                    return (
                                        <Picker.Item
                                            key={i}
                                            value={item.offer_id}
                                            label={item.offer_type_name}
                                        />
                                    );
                                })}
                            </Picker>
                        </View>
                        <View>
                            {/* select group  */}
                            <SectionedMultiSelect
                                items={select_group}
                                uniqueKey='group_id'
                                subKey=''
                                selectText='Select the groups to promote the offer'
                                showDropDowns={true}
                                selectChildren={true}
                                searchPlaceholderText='Serach Group'
                                showDropDowns={false}
                                displayKey='group_name'
                                onSelectedItemsChange={this.onSelectedItemsChange}
                                selectedItems={this.props.selected_group_id}
                            />
                        </View>
                        <View>
                            {this.renderNotifyButton()}
                        </View>
                    </Form>
                </ScrollView>
            </Container>
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


function mapStateToProps({ offer, user }) {
    const { token } = user;
    const { promoteOffer } = offer
    return {
        ...promoteOffer,
        token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestOfferList: ({
            token,
            status
        }) => {
            return dispatch(requestOfferList({
                token,
            }));
        },
        requestPromoteOffer: ({
            token,
            offer_id,
            selected_group_id
        }) => {
            return dispatch(requestPromoteOffer({
                token,
                offer_id,
                selected_group_id
            }));
        },
        requestGroupListToPromote: ({
            token,
        }) => {
            return dispatch(requestGroupListToPromote({
                token,
            }));
        },
        selectedOfferTypeid: (text) => {
            return dispatch(selectedOfferTypeid(text))
        },
        selectedGroupid: (text) => {
            return dispatch(selectedGroupid(text))
        },
        seledtedGroups: (array) => {
            return dispatch(seledtedGroups(array))
        },

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PromoteOffer);