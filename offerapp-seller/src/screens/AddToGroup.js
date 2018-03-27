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
import DropDownSelect from '../components/DropDownSelect'
import { Actions } from 'react-native-router-flux';
export default class AddtoGroup extends React.Component{
    render(){
        return(
            <Container>
                <Header style={{backgroundColor: '#C10F41'}}>
                    <SellerHeader title =" Add to Group "/>
                </Header>
                <Form>
                    {/* Enter MObile NUmber */}
                    <Item floatingLabel>
                        <Label>Mobile Number</Label>
                        <Input />
                    </Item>
                    {/* Select Group */}
                    <DropDownSelect selectLabel ="Select Group"/>
                    <Button block danger
                        style={{backgroundColor: '#C10F41', borderRadius: 0}}
                        onPress={Actions.offerListingScreen}
                    >
                        <Text>Send Invitation</Text>
                    </Button>
                </ Form>
            </ Container>
        )
    }
}