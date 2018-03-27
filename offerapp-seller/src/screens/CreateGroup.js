import React from 'react';
import DropDownSelect from '../components/DropDownSelect';
import SellerHeader from '../components/SellerHeader';
import { Container, Header } from 'native-base';
export default class CreateGroup extends React.Component{
    render(){
        return(
            <Container>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Create Group'/>
                </Header>
            </Container>
        )
    }
}