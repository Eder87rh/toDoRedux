import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Header, Title, Content, Footer, List, ListItem,
  FooterTab, Button, Left, Right, Body, Icon, Text, Switch
} from 'native-base';

import * as actions from './actions/index';



class App extends Component {
  render() {
    return (

      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>


          <List dataArray={this.props.todos}
            renderRow={(todo) =>
              <ListItem icon>
                <Left>
                  <Switch value={false} />
                </Left>
                <Body>
                  <Text>{todo.text}</Text>
                </Body>
              </ListItem>
            }>
          </List>


        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}

function mapStateToProps(state, ownProps) {

  //alert(state.todos[0])
  return {
    todos: state.todos,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);