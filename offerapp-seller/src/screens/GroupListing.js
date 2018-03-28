import React from 'react';
import SellerHeader from '../components/SellerHeader'
import { Container, Header, View, Content } from 'native-base';
import GroupDetailCard from '../components/GroupDetailCard';
import FabAddGroup from '../components/fab/FabAddGroup';

export default class GroupListing extends React.Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Group List' />
                </Header>

                {/* Group Detail Card */}
                <Content>
                    <GroupDetailCard
                        groupNumber='1'
                        groupName='ABC'
                        totalMembers='25'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                </Content>
                <FabAddGroup />
            </Container>

        )
    }
}