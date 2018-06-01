import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Content,
  Spinner,
  Button,
  Right,
  Title,
  Label,
  Input,
  Form,
  Item,
  Left,
  View,
  Icon,
  Body,
  Text,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import {
//  variables,
  colors,
} from '../styles';
 import backgroundImage from '../assets/images/BackgroundImage.png';
 import {
   forgotPasswordGetOtp,
   forgotPasswordMobileVerifyChanged
 } from '../actions';

class ForgotPasswordMobileVerifyScreen extends React.Component {
  onMobileVerifyChange(text) {
    this.props.forgotPasswordMobileVerifyChanged(text);
  }
  onButtonPress() {
    const { fpMobileVerify } = this.props;
    this.props.forgotPasswordGetOtp({ mobileVerify: fpMobileVerify });
  }
  renderGetOtpButton() {
    const { getotpStyle, otpButtonStyle } = styles;
    if (this.props.fpMobileVerifyLoading) {
      return (
        <Button style={getotpStyle}>
          <Spinner color='white' />
        </Button>
      );
    } else if (this.props.fpMobileVerifyError) {
      return (
        <Button style={getotpStyle}>
          <Text style={otpButtonStyle}>OTP NOT SENT</Text>
        </Button>);
   }
   return (
     <Button style={getotpStyle} onPress={this.onButtonPress.bind(this)}>
       <Text style={otpButtonStyle}>GET OTP</Text>
     </Button>);
  }
  render() {
    const {
      backgroundImageStyle,
      containerStyle,
      itemViewStyle,
      contentStyle,
      // pickerStyle,
      headerStyle,
      titleStyle,
      textStyle,
      itemStyle,
      formStyle,
      } = styles;
    return (
      <View>
        <ImageBackground
        style={backgroundImageStyle}
        source={backgroundImage}
        >
          <Container style={containerStyle}>
            <Header
            style={headerStyle}
            iosBarStyle='light-content'
            >
              <Left>
                <Button transparent onPress={Actions.pop}>
                  <Icon style={{ color: 'white' }} ios='ios-arrow-back' android="md-arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title style={titleStyle}>Forgot Password -> Step 1</Title>
              </Body>
              <Right />
            </Header>
            <Content contentContainerStyle={contentStyle}>
              <View>
                <Text style={textStyle}>Verify your number</Text>
              </View>
              <View>
                <Form style={formStyle}>
                  <View style={itemViewStyle}>
                    <Item >
                      <Label style={{color: '#d2d2d2'}}> +91</Label>
                    </Item>
                    <Item floatingLabel style={itemStyle}>
                      <Label style={{color: '#d2d2d2'}}> Enter your number</Label>
                      <Input
                        style={{color: '#d2d2d2'}}
                        onChangeText={this.onMobileVerifyChange.bind(this)}
                        value={this.props.fpMobileVerify}
                        keyboardType='numeric'
                        returnKeyType={'done'}
                      />
                    </Item>
                  </View>
                </Form>
              </View>
              <View>
                {this.renderGetOtpButton()}
              </View>
            </Content>
          </Container>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.transparent,
    marginTop: 20,
  },
  headerStyle: {
    borderBottomColor: colors.headerColor,
    backgroundColor: colors.headerColor,
    paddingTop: 0,
  },
  titleStyle: {
    fontSize: responsiveFontSize(3),
    width: responsiveWidth(80),
    justifyContent: 'center',
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  backgroundImageStyle: {
    height: responsiveHeight(100),
    width: responsiveWidth(100)
  },
  contentStyle: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: responsiveHeight(3.5),
    marginTop: responsiveHeight(5),
    textAlign: 'center',
    color: 'white',
   },
  getotpStyle: {
    width: responsiveWidth(50),
    marginTop: responsiveHeight(10),
    backgroundColor: colors.login,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerStyle: {
    width: responsiveWidth(20),
    paddingBottom: 10,
    marginTop: 10,
  },
  formStyle: {
    backgroundColor: colors.lightGrayTransparent,
    marginTop: responsiveHeight(10),
    width: responsiveWidth(85),
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: responsiveWidth(7.5),
    height: responsiveHeight(30)
  },
  itemViewStyle: {
    width: responsiveWidth(70),
    flexDirection: 'row',
    paddingBottom: 10,
    marginTop: 9,
    justifyContent: 'center',
  },
  itemStyle: {
    marginTop: responsiveHeight(-3.3),
    width: responsiveWidth(50),
    alignSelf: 'center',
  },
  otpButtonStyle: {
    fontSize: responsiveFontSize(2.2)
  }

});

function mapStateToProps({ forgotpassword }) {
    return {
        ...forgotpassword
    };
}

function mapDispatchToProps(dispatch) {
    return {
        forgotPasswordMobileVerifyChanged: (text) => {
          return dispatch(forgotPasswordMobileVerifyChanged(text));
        },
        forgotPasswordGetOtp: ({ mobileVerify }) => {
          return dispatch(forgotPasswordGetOtp({ mobileVerify }));
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordMobileVerifyScreen);
