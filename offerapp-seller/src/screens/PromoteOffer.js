import React from 'react';
import SellerHeader from "../components/SellerHeader";
import { Container, Header, View, Form, Button, Text } from 'native-base';
import DropDownSelect from '../components/DropDownSelect'
import { Actions } from 'react-native-router-flux';
export default class PromoteOffer extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Promote Offer' />
                </Header>
                <Form style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                    <View>
                        <DropDownSelect selectLabel='Select Offer' />
                    </View>
                    <View>
                        <DropDownSelect selectLabel='Select Group' />
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
