import React from 'react';
import { Container,
    Header,
    Footer,
    Content,
    Form,
    Item,
    Label,
    Input,
    Button,
    Text
} from 'native-base';
import SellerHeader from '../components/SellerHeader';
import SelectGroup from '../components/SelectGroup';
import { Actions } from 'react-native-router-flux';
export default class AddtoGroup extends React.Component{
    render(){
        return(
            <Container>
                <Header style={{backgroundColor: '#C10F41'}}>
                    <SellerHeader title =" Add to Group "/>
                </Header>
                <Form>
                    <Item floatingLabel>
                        <Label>Mobile Number</Label>
                        <Input />
                    </Item>
                    <SelectGroup />
                    <Button block danger
                    style={{backgroundColor: '#C10F41', borderRadius: 0}}
                    onPress={Actions.OfferListingScreen}
                    >
                        <Text>Send Invitation</Text>
                    </Button>
                </ Form>
            </ Container>
        )
    }
}