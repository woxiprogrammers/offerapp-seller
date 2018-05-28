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
export default class GrabOfferScreen extends Component {
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
                            <Input />
                        </Item>
                    </View>
                    <View>
                        <Button block style={{ backgroundColor: colors.headerColor }}
                            onPress={Actions.offerListingScreen}
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