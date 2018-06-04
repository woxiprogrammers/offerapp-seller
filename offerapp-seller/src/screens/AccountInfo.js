import React from 'react';
import {
    ScrollView,
    Picker,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native'
import {
    Container,
    Header,
    Form,
    Item,
    Label,
    Input,
    Text,
    View,
    Left,
    Right,
    Button,
    Spinner,
} from 'native-base';
import SellerHeader from '../components/SellerHeader';
import DropDownSelect from '../components/DropDownSelect'
import { colors } from '../styles'
import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    requestFloor,
    floorChange,
    requestAccInfo,
    shopNameChanged,
    firstNameChange,
    lastNameChange,
    landLineChange,
    addressChange,
    zipCodeChange,
    stateChange,
    cityChange,
    requestEditAccInfo
} from '../actions';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export class AccountInfo extends React.Component {
    componentWillMount() {
        const {
            token
        } = this.props;
        this.props.requestAccInfo({
            token
        });
        this.props.requestFloor({
            token
        });
    }

    onShopNameChange(text) {
        this.props.shopNameChanged(text);
    }

    onFirstNameChange(text) {
        this.props.firstNameChange(text);
    }

    onLastNameChange(text) {
        this.props.lastNameChange(text);
    }

    renderSpinner() {
        if (this.props.isloading) {
            return (
                <Form style={{ paddingTop: '50%' }}>
                    <Spinner color='black' />
                </Form>
            )
        }
    }

    onAddressChange(text) {
        this.props.addressChange(text);
    }

    onCityChange(text) {
        this.props.cityChange(text);
    }

    onZipcodeChange(text) {
        this.props.cityChange(text);
    }

    onStateChange(text) {
        this.props.stateChange(text);
    }

    onButtonPress() {
        const {
            token,
            shop_name,
            first_name,
            last_name,
            landline,
            stateInIndia,
            city,
            zipcode,
            address,
            id
        } = this.props;
        this.props.requestEditAccInfo({
            token,
            shop_name,
            first_name,
            last_name,
            landline,
            stateInIndia,
            city,
            zipcode,
            address,
            id
        })
    }

    renderShopName() {
        const {
            account_detail
        } = this.props;
        if (account_detail.shop_name === '') {
            return (
                <Item floatingLabel>
                    <Label>Shop Name</Label>
                    <Input
                        onChangeText={this.onShopNameChange.bind(this)}
                        value={this.props.shop_name}
                    />
                </Item>
            )
        } else {
            return (
                <Item floatingLabel>
                    <Label>Shop Name</Label>
                    <Input
                        onChangeText={this.onShopNameChange.bind(this)}
                        value={this.props.shop_name}
                    />
                </Item>
            )
        }
    }

    renderFirstName() {
        const {
            account_detail
        } = this.props;
        if (account_detail.first_name === '') {
            return (
                <View >
                    {/* First Name */}
                    <Item floatingLabel>
                        <Label>First Name</Label>
                        <Input
                            onChange={this.onFirstNameChange.bind(this)}
                            value={this.props.first_name}
                        />
                    </Item>
                </View>
            )
        } else {
            return (
                <View >

                    <Item floatingLabel>
                        <Label>First Name</Label>
                        <Input
                            value={this.props.first_name}
                            onChange={this.onFirstNameChange.bind(this)}
                        />
                    </Item>
                </View>
            )
        }
    }

    renderLastName() {
        const {
            account_detail
        } = this.props;
        if (account_detail.last_name === '') {
            return (
                <View >
                    {/* Last Name */}
                    <Item floatingLabel>
                        <Label>Last Name</Label>
                        <Input
                            onChangeText={this.onLastNameChange.bind(this)}
                            value={this.props.last_name}
                        />
                    </Item>
                </View>
            )
        } else {
            return (
                <View >
                    {/* Last Name */}
                    <Item floatingLabel>
                        <Label>Last Name</Label>
                        <Input
                            onChangeText={this.onLastNameChange.bind(this)}
                            value={this.props.last_name}
                        />

                    </Item>
                </View>
            )
        }
    }

    renderFullName() {
        return (
            <View >
                {/* First Name */}
                {this.renderFirstName()}
                {/* Last Name */}
                {this.renderLastName()}
            </View>
        )
    }

    renderAddress() {
        const {
            account_detail
        } = this.props;
        if (account_detail.address === '') {
            <Item floatingLabel>
                <Label>Full Address</Label>
                <Input
                    onChangeText={this.onAddressChange.bind(this)}
                    value={this.props.address}
                />
            </Item>
        } else {
            <Item floatingLabel>
                <Label>Full Address</Label>
                <Input
                    onChangeText={this.onAddressChange.bind(this)}
                    value={this.props.address}
                />
            </Item>
        }
    }

    renderCity() {
        const {
            account_detail
        } = this.props;
        if (account_detail.city === '') {
            return (
                <View >
                    <Item floatingLabel>
                        <Label>City</Label>
                        <Input
                            onChangeText={this.onCityChange.bind(this)}
                            value={this.props.city}
                        />
                    </Item>
                </View>
            )
        } else {
            return (
                <View >
                    <Item floatingLabel>
                        <Label>City</Label>
                        <Input
                            onChangeText={this.onCityChange.bind(this)}
                            value={this.props.city}
                        />
                    </Item>
                </View>
            )
        }
    }

    renderZipCode() {
        const {
            account_detail
        } = this.props;
        if (account_detail.zipcode === '') {
            return (
                <Item floatingLabel>
                    <Label>Zip code</Label>
                    <Input
                        onChangeText={this.onCityChange.bind(this)}
                        
                    />
                </Item>
            )
        } else {
            return (
                <Item floatingLabel>
                    <Label>Zip code</Label>
                    <Input
                        onChangeText={this.onCityChange.bind(this)}
                        value={this.props.zipcode}
                    />
                </Item>
            )
        }
    }
    renderStateInIndia() {
        const {
            account_detail
        } = this.props;
        if (account_detail.state === '') {
            return (
                <Item floatingLabel>
                    <Label>State</Label>
                    <Input
                        onChangeText={this.onStateChange.bind(this)}
                        value={this.props.stateInIndia}
                    />
                </Item>
            )
        } else {
            return (
                <Item floatingLabel>
                    <Label>State</Label>
                    <Input
                        onChangeText={this.onStateChange.bind(this)}
                        value={this.props.stateInIndia}
                    />
                </Item>
            )
        }

    }

    renderAccInfoForm() {
        const {
            floors,
            account_detail
        } = this.props;
        if (this.props.isloading) {
            return (
                this.renderSpinner()
            )
        } else {
            return (
                <Form style={{ paddingLeft: '2%', paddingRight: '2%' }}>
                    {/* Enter Shop Name */}
                    <View>
                        {this.renderShopName()}
                    </View>

                    {/* Enter Full Name */}
                    <View style={{ paddingTop: '3%' }}>
                        <Text>Full Name</Text>
                    </View>
                    {this.renderFullName()}

                    {/* Contact Information */}
                    <View style={{ paddingTop: '3%' }}>
                        <Text>Contact Information</Text>
                    </View>
                    <View>
                        {/* Mobile Number */}
                        <Item floatingLabel>
                            <Label>Mobile Number</Label>
                            <Input
                                selectTextOnFocus={false}
                                value={account_detail.landline}
                            />
                        </Item>
                    </View>

                    {/* Address */}
                    <View style={{ paddingTop: '3%' }}>
                        <Text>Address</Text>
                    </View>
                    <View>
                        {/* select floor */}
                        <Text>Select Floor</Text>
                        <Picker
                            style={styles.pickerStyle}
                            mode='dropdown'
                            selectedValue={this.props.id}
                            onValueChange={(itemValue, itemIndex) => {
                                this.props.floorChange(itemValue);
                            }}
                        >
                            {floors.map((item, i) => {
                                return (<Picker.Item
                                    key={i}
                                    value={item.id}
                                    label={item.name}
                                />);
                            })}
                        </Picker>
                        {this.renderAddress()}
                    </View>
                    <View>
                        {this.renderZipCode()}
                        {this.renderCity()}
                        {this.renderStateInIndia()}
                    </View>

                    {/* Types of payments */}
                    {/* <View>
                                <DropDownSelect selectLabel="Select Type of Payment" />
                            </View> */}

                    {/* Upload shop images */}
                    {/* <View style={{ paddingTop: '3%' }}>
                            <Text>Photos</Text>
                        </View>
                        <View>
                            <Button>
                                <Text>Select</Text>
                            </Button>
                        </View> */}
                    <View style={{ paddingTop: '3%' }}>
                        <Button full style={{ backgroundColor: '#C10F41' }}
                            onPress={this.onButtonPress.bind(this)}
                        >
                            <Text style={{ color: 'white' }}>Submit</Text>
                        </Button>
                    </View>
                </Form>
            )
        }
    }
    render() {
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Account Information' />
                </Header>

                <KeyboardAvoidingView
                    behavior="padding"
                >
                    <ScrollView>
                        {this.renderAccInfoForm()}
                    </ScrollView>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    pickerStyle: {
        width: responsiveWidth(95),
        paddingBottom: 10,
        marginTop: 10,
    }
})

function mapStateToProps({ user, accountInformation }) {
    const { token } = user;
    return {
        ...accountInformation,
        token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestFloor: ({
            token
        }) => {
            return (dispatch(requestFloor({
                token
            })));
        },
        requestAccInfo: ({
            token
        }) => {
            return (dispatch(requestAccInfo({
                token
            })));
        },
        requestEditAccInfo: ({
            token,
            shop_name,
            first_name,
            last_name,
            landline,
            stateInIndia,
            city,
            zipcode,
            address,
            id
        }) => {
            return (dispatch(requestEditAccInfo({
                token,
                shop_name,
                first_name,
                last_name,
                landline,
                stateInIndia,
                city,
                zipcode,
                address,
                id
            })));
        },

        shopNameChanged: (text) => {
            return dispatch(shopNameChanged(text));
        },
        firstNameChange: (text) => {
            return dispatch(firstNameChange(text));
        },
        lastNameChange: (text) => {
            return dispatch(lastNameChange(text));
        },
        addressChange: (text) => {
            return dispatch(addressChange(text));
        },
        floorChange: (text) => {
            return dispatch(floorChange(text));
        },
        cityChange: (text) => {
            return dispatch(cityChange(text));
        },
        stateChange: (text) => {
            return dispatch(stateChange(text));
        },
        zipCodeChange: (text) => {
            return dispatch(zipCodeChange(text));
        },
        landLineChange: (text) => {
            return dispatch(landLineChange(text));
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountInfo);