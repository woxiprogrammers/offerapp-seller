import React from 'react';
import SellerHeader from "../components/SellerHeader";
import {
    Container,
    Header,
    View,
    Form,
    Button,
    Text
} from 'native-base';
import {
    Picker,
    StyleSheet,
} from 'react-native'
import DropDownSelect from '../components/DropDownSelect'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    requestOfferList,
    requestGroupListToPromote
} from '../actions/Offer/PromoteOfferAction'
import { responsiveWidth } from 'react-native-responsive-dimensions';
export class PromoteOffer extends React.Component {
    componentWillMount() {
        const {
            token,
        } = this.props;
        this.props.requestOfferList({ token });
        this.props.requestGroupListToPromote({ token })
    }
    render() {
        const {
            offer_list,
            select_groups
        } = this.props;
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Promote Offer' />
                </Header>
                <Form style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                    <View>
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
                                return (<Picker.Item
                                    key={i}
                                    value={item.offer_id}
                                    label={item.offer_name}
                                />);
                            })}
                        </Picker>
                    </View>
                    <View>

                    </View>
                    <View>
                        <Button full
                            style={{ backgroundColor: '#C10F41' }}
                            onPress={Actions.offerListingScreen}
                        >
                            <Text>Nofity</Text>
                        </Button>
                    </View>
                </Form>
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
        }) => {
            return dispatch(requestOfferList({
                token,
            }));
        },
        requestGroupListToPromote: ({
            token,
        }) => {
            return dispatch(requestGroupListToPromote({
                token,
            }));
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PromoteOffer);