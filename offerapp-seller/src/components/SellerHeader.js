import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class SellerHeader extends Component {
  render() {
    return (
      <Container >
        <Header style={{backgroundColor: '#C10F41'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='md-notifications' style={{color:'yellow'}}/>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
