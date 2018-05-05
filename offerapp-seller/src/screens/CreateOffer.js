import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Image, Picker, Alert } from 'react-native';
import {
  Container,
  Header,
  Content,
  Icon,
  Button,
  Text,
  Input,
  Item,
  Footer,
  Form,
  Spinner
} from 'native-base';
import { ImagePicker } from 'expo';
import SellerHeader from '../components/SellerHeader';
import SellerFooter from '../components/SellerFooter';
import DropDownSelect from '../components/DropDownSelect'
import DescriptionBox from '../components/DescriptionBox'
import { connect } from 'react-redux';
import { width, height, totalSize } from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import {
  selectCategoryType,
  selectSubCategoryType,
  selectOfferType,
  selectOfferTypeid,
  selectedofferCategoryId,
  selectedSubCategoryId,
  selectedOfferTypeid,
  offerDescriptionChanged,
  createOfferRequest,
  startDateChange,
  endDateChange
} from '../actions';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import renderIf from '../condition/renderIf'
import DatePicker from 'react-native-datepicker'

export class CreateOffer extends Component {

  constructor(props) {
    super(props)
    this.state = { startDate: "" }
    this.state = { endDate: "" }
    this.state = { currentDate: new Date().getDate }
    this.state = { currentMonth: new Date().getMonth + 1 }
    this.state = { currentYear: new Date().getFullYear }
    this.state = { todaysDate: this.state.currentDate + '-' + this.state.currentMonth + '-' + this.state.currentYear }
  }
  state = {
    image: null,
  };
  componentWillMount() {
    const {
      token,
      category_id
    } = this.props;
    this.props.selectCategoryType({
      token
    });

    this.props.selectOfferType({
      token
    });

    this.props.selectSubCategoryType({
      token,
      category_id: category_id
    })
  }

  onDescriptionChange(text) {
    this.props.offerDescriptionChanged(text);
  }

  onStartDateChange(text) {
    this.props.startDateChange(text);
  }

  onEndDateChange(text) {
    this.props.endDateChange(text);
  }

  onButtonPress() {
    const {
      token,
      category_id,
      offer_type_id,
      offer_description,
      start_date,
      end_date,
      // image
    } = this.props;
    this.props.createOfferRequest({
      token,
      category_id,
      offer_type_id,
      offer_description,
      start_date,
      end_date,
    });
  }
  render() {
    let { image } = this.state;
    const {
      select_offer_type,
      select_sub_category_type,
      select_category_type
    } = this.props;

    return (
      <ScrollView>
        <Container style={{ marginTop: '5.8%' }}>
          <Header style={{ backgroundColor: '#C10F41' }}>
            <SellerHeader title='Create Offer' />
          </ Header>
          <Content>
            <Form>
              <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                {/* Select offer Type */}
                <Picker
                  style={styles.pickerStyle}
                  mode='dropdown'
                  selectedValue={this.props.offer_type_id}
                  onValueChange={(itemValue, itemIndex) => {
                    this.props.selectedOfferTypeid(itemValue);
                  }}
                >
                  {select_offer_type.map((item, i) => {
                    return (<Picker.Item
                      key={i}
                      value={item.offer_type_id}
                      label={item.offer_type_name}
                    />);
                  })}
                </Picker>

                {/* Select Category  */}
                <Picker
                  style={styles.pickerStyle}
                  mode='dropdown'
                  selectedValue={this.props.category_id}
                  onValueChange={(itemValue, itemIndex) => {
                    this.props.selectedofferCategoryId(itemValue);
                    const {
                      token,
                      category_id
                    } = this.props;
                    this.props.selectSubCategoryType({
                      token,
                      category_id: itemValue
                    })
                  }}
                >
                  {select_category_type.map((item, i) => {
                    return (<Picker.Item
                      key={i}
                      label={item.category_name}
                      value={item.category_id} />);
                  })}
                </Picker>

                {/* Select Sub Category */}
                <Picker
                  style={styles.pickerStyle}
                  mode='dropdown'
                  selectedValue={this.props.sub_category_id}
                  onValueChange={(itemValue, itemIndex) => {
                    this.props.selectedSubCategoryId(itemValue);

                  }}
                >
                  {select_sub_category_type.map((item, i) => {
                    return (<Picker.Item
                      key={i}
                      value={item.sub_category_id}
                      label={item.sub_category_name}
                    />);
                  })}
                </Picker>
                <Text style={{ paddingBottom: 10, paddingTop: 10 }}>Offer Validity</ Text>

                {/* Date Picker */}
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center'

                  }}
                >
                  <Text > Start Date </ Text>
                  <Text > End Date </ Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Start Date */}
                  <DatePicker
                    date={this.state.startDate}
                    mode="date"
                    placeholder="DD-MM-YYYY"
                    format="DD-MM-YYYY"
                    minDate={this.state.todaysDate}
                    maxDate="01-06-2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}

                    onDateChange={(date) => { this.setState({ startDate: date }); this.onStartDateChange(date); }}
                  />

                  {/* End Date */}
                  <DatePicker
                    date={this.state.endDate}
                    mode="date"
                    placeholder="DD-MM-YYYY"
                    format="DD-MM-YYYY"
                    minDate={this.state.startDate}
                    maxDate="01-06-2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={(date) => { this.setState({ endDate: date }); this.onEndDateChange(date); }}
                  />
                </ View>
              </ View>

              {/* Offer Description */}
              <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Text style={{ paddingBottom: 10, paddingTop: 10 }}>Offer Description</ Text>
                <Item regular>
                  <Input
                    onChangeText={this.onDescriptionChange.bind(this)}
                    value={this.props.offer_description}
                  />
                </Item>
              </View>

              {/* Upload Photos */}
              <Text style={{ paddingLeft: 10, paddingBottom: 10, paddingTop: 10 }}>Upload Photos</ Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingLeft: '3%'
                }}
              >
                <Button info
                  onPress={this._pickImage}>
                  <Text> Select </Text>
                </ Button>
                {image &&
                  <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
              </View>

              {/* Submit Button */}
              <View style={{ paddingTop: '3%' }}>
                <Button block
                  style={{ backgroundColor: '#C10F41', borderRadius: 0, }}
                  onPress={this.onButtonPress.bind(this)}
                >
                  <Text> Submit </Text>
                </ Button>
              </View>
            </Form>
          </ Content>
        </ Container>
      </ScrollView>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

function mapStateToProps({ offer, user }) {
  const { token } = user;
  const { createOffer } = offer
  return {
    ...createOffer,
    token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectOfferType: ({
      token,
    }) => {
      return dispatch(selectOfferType({
        token,
      }));
    },
    selectCategoryType: ({
      token,
    }) => {
      return dispatch(selectCategoryType({
        token,
      }));
    },
    selectedOfferTypeid: (text) => {
      return dispatch(selectedOfferTypeid(text));
    },
    selectedofferCategoryId: (text) => {
      return dispatch(selectedofferCategoryId(text));
    },
    selectSubCategoryType: ({
      token,
      category_id
    }) => {
      return dispatch(selectSubCategoryType({
        token,
        category_id
      }));
    },
    offerDescriptionChanged: (text) => {
      return dispatch(offerDescriptionChanged(text));
    },
    startDateChange: (text) => {
      return dispatch(startDateChange(text));
    },
    endDateChange: (text) => {
      return dispatch(endDateChange(text));
    },
    createOfferRequest: ({
      token,
      category_id,
      offer_type_id,
      offer_description,
      start_date,
      end_date,
    }) => {
      return dispatch(createOfferRequest({
        token,
        category_id,
        offer_type_id,
        offer_description,
        start_date,
        end_date,
      }));
    },
  };
}

const styles = StyleSheet.create({
  pickerStyle: {
    width: responsiveWidth(95),
    paddingBottom: 10,
    marginTop: 10,
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOffer);