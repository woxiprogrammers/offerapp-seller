import React , { Component } from 'react'
import { Container, Header, Content, Item, Icon, Input } from 'native-base';
import SellerHeader from '../components/SellerHeader'
import CustomerCard from '../components/CustomerCardGrabOffer'
export default class IamIntrested extends Component {
    render(){
        return(
            <Container>
                           
                <Header style={{backgroundColor: '#C10F41'}}>
                    <SellerHeader title='Customer List'/>
                </Header>
                <Content>
                    {/* seacrh bar */}
                    <Item regular>
                        <Icon active name='ios-search' />
                        <Input placeholder='Search'/>
                    </Item> 
                    <CustomerCard 
                        customerName= 'Mayur'
                        customerMobile='9999999999'
                        customerEmail= 'mayur.woxi@gmail.com'
                    />
                </Content>
            </Container>
        )
    }
}