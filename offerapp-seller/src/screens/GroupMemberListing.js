import React from 'react';
import CustomerCard from '../components/CustomerCardGroupList';
import SellerHeader from '../components/SellerHeader';
import { Container, Header, Content } from 'native-base';
export default class GroupMemberListing extends React.Component{
    render(){
        return(
            <Content>
                <Header  style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Members List'/>
                </Header>
            <CustomerCard 
                customerName ='Mayur'
                customerMobile= '1234567890'
                customerEmail= 'mayur.woxi@gmail.com'
            />
            </Content>
        )
    }
}