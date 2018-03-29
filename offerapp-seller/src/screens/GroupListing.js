import React from 'react';
import SellerHeader from '../components/SellerHeader'
import { Container, Header, View, Content } from 'native-base';
import GroupDetailCard from '../components/GroupDetailCard';
import FabAddGroup from '../components/fab/FabAddGroup';
import { Actions } from 'react-native-router-flux';

export default class GroupListing extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Group List' />
                </Header>

                {/* Group Detail Card */}
                <Content>
                    <GroupDetailCard
                        groupNumber='1'
                        groupName='ABC'
                        totalMembers='25'
                        onPress={Actions.offersSentScreen}
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />
                    <GroupDetailCard
                        groupNumber='2'
                        groupName='PQR'
                        totalMembers='20'
                    />

                </Content>
                <View>
                    <FabAddGroup />
                </View>
            </Container>

        )
    }
}