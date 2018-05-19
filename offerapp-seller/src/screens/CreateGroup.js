import React from 'react';
import DropDownSelect from '../components/DropDownSelect';
import SellerHeader from '../components/SellerHeader';
import { TextInput, StyleSheet } from 'react-native';
import { Container, Header, View, Item, Label, Input, Text, Left, Right, Button } from 'native-base';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../styles'
import { Actions } from 'react-native-router-flux';
import {
    createGroup,
    groupNameChanged,
    groupDescriptionChanged
} from '../actions/Group/CreateGroupAction';
import { connect } from 'react-redux';

export class CreateGroup extends React.Component {
    onGroupNameChange(text) {
        this.props.groupNameChanged(text);
    }

    onGroupDescChange(text) {
        this.props.groupDescriptionChanged(text);
    }

    onButtonPress() {
        const { 
            groupName, 
            groupDescription,
            token 
        } = this.props;
        this.props.createGroup({ 
            groupName, 
            groupDescription, 
            token 
        });
    }
    
    render() {
        return (
            <Container style={{ marginTop: '5.8%' }}>
                <Header style={{ backgroundColor: '#C10F41' }}>
                    <SellerHeader title='Create Group' />
                </Header>
                <View style={{
                    paddingTop: '3%',
                    paddingLeft: '3%',
                    paddingRight: '3%'
                }}>
                    {/* Enter Group Name */}
                    <Item floatingLabel>
                        <Label>Group Name</Label>
                        <Input
                            onChangeText={this.onGroupNameChange.bind(this)}
                            value={this.props.groupNameEntered}
                        />
                    </Item>
                    <View>
                        <Item floatingLabel>
                            <Label>Description</Label>
                            <Input
                                onChangeText={this.onGroupDescChange.bind(this)}
                                value={this.props.groupDescriptionEntered}
                            />
                        </Item>
                    </View>
                    <View style={{ paddingTop: '3%' }}>
                        <Button full
                            style={{ backgroundColor: colors.headerColor }}
                            onPress={this.onButtonPress.bind(this)}
                        >
                            <Text>Submit</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        )
    }
}
function mapStateToProps({ group, user }) {
    const { token } = user;
    const {createGroup} = group;
    return {
        ...createGroup,
        token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        groupNameChanged: (text) => { 
            return dispatch(groupNameChanged(text));
         },
        groupDescriptionChanged: (text) => { 
            return dispatch(groupDescriptionChanged(text)); 
        },
        createGroup: ({ groupName, groupDescription, token }) => {
            return dispatch(createGroup({ groupName, groupDescription, token }));
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGroup);