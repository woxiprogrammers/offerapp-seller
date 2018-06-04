import React, {
    Component
} from 'react';
import {
    Container,
    Item,
    Label,
    Input,
    Header,
    Content,
    View,
    Button,
    Text
} from 'native-base';
import {
    StyleSheet
} from 'react-native';
import {
    colors
} from '../styles'
import SellerHeader from '../components/SellerHeader';
import { Actions } from 'react-native-router-flux';
import {
    getGrabCode,
    verifyGrabCodeRequest
  } from '../actions';
  import { connect } from 'react-redux';
  

export class GrabOfferScreen extends Component {
    grabCodeChange(text) {
        console.log("grabcode recived");
        console.log(text);
        this.props.getGrabCode(text);
        const{
          token,
          grab_code
        } = this.props;
        this.props.verifyGrabCodeRequest({
          token,
          grab_code
        })
      }
    render() {
        const {
            headerStyle,
            pageStyle
        } = styles;
        return (
            <Container>
                <Header style={headerStyle}>
                    <SellerHeader title='Grab Code' />
                </Header>
                <Content style={pageStyle}>
                    <View style={{ paddingTop: '2%' }}>
                        <Item stackedLabel>
                            <Label>Enter the grab code</Label>
                            <Input
                                value= {this.props.grab_code}
                            />
                        </Item>
                    </View>
                    <View>
                        <Button block style={{ backgroundColor: colors.headerColor }}
                            onPress={()=>this.getGrabCode.bind(this)}
                        >
                            <Text>
                                Submit
                            </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: '5.8%',
        backgroundColor: colors.headerColor,
    },
    pageStyle: {
        marginLeft: '2.5%',
        marginRight: '2.5%'
    }
})

function mapStateToProps({ grabCode, user }) {
    const { token } = user;
    return {
        ...grabCode,
        token
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
      verifyGrabCodeRequest: ({
            token,
            grab_code
        }) => {
            return dispatch(verifyGrabCodeRequest({
                token,
                grab_code
            }));
        },
        getGrabCode: (text) => {
            return dispatch(getGrabCode(text));
        },
        
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GrabOfferScreen);