import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Container, Header, Title, Content, Footer, List, ListItem, Form,
  FooterTab, Button, Left, Right, Body, Icon, Text, CheckBox, Item, Input
} from 'native-base'
import { StyleSheet, View, ScrollView } from 'react-native'

import * as actions from './actions/index'
import TodosList from './components/TodosList'


class App extends Component {

  _toggleTodo = (id) => {
    this.props.actions.toggleTodo(id)
  }

  _addTodo = (text) => {
    this.props.actions.addTodo(text)
  }

  _filter = (filter) => {
    this.props.actions.setFilter(filter)
  }


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
            <Title>Todo Redux</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.container}>


          <TodosList todos={this.props.todos}
            addTodo={this._addTodo}
            toggleTodo={this._toggleTodo} />

        </Content>
        <Footer>
          <FooterTab>
            <Button active={this.props.filter.type === 'ACTIVE'}
              onPress={() => this._filter('ACTIVE')}
            >
              <Text>Active</Text>
            </Button>
            <Button active={this.props.filter.type === 'COMPLETED'}
              onPress={() => this._filter('COMPLETED')}
            >
              <Text>Completed</Text>
            </Button>
            <Button active={this.props.filter.type === 'ALL'}
              onPress={() => this._filter('ALL')}
            >
              <Text>All</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos.filter(todo => {
      switch (state.filter.type) {
        case 'ALL':
          return true
          break
        case 'ACTIVE':
          return !todo.completed
          break
        case 'COMPLETED':
          return todo.completed
          break
      }
    }),
    filter: state.filter.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);