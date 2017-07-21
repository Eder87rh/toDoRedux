import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Container, Header, Title, Content, Footer, List, ListItem, Form,
  FooterTab, Button, Left, Right, Body, Icon, Text, CheckBox, Item, Input
} from 'native-base'
import { StyleSheet, View, ScrollView } from 'react-native'

import * as actions from './actions/index'
import Actives from './components/actives'
import Completed from './components/completed'
import All from './components/all';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: this.props.filter,
      todos: this.props.todos
    }
  }

  _toggleTodo = (id) => {
    this.props.actions.toggleTodo(id)
  }

  _addTodo = (text) => {
    this.props.actions.addTodo(text)
    this.renderTasks();
  }

  _filter = (filter) => {
    this.props.actions.setFilter(filter)
  }

  setTab = (text) => {
    // this.setState({ selectedTab: text })
    this._filter(text)


    //alert(this.props.filter)
    // alert(this.state.selectedTab)

    // switch (text) {
    //   case 'ACTIVE':
    //     this.setState({ todos: this.props.todos.filter(t => !t.completed) })
    //     break;
    //   case 'COMPLETED':
    //     this.setState({ todos: this.props.todos.filter(t => t.completed) })
    //     break;
    //   case 'ALL':
    //     this.setState({ todos: this.props.todos })
    //     break;
    //   default:
    // }

  }

  renderTasks = () => {
    switch (this.state.selectedTab) {
      case 'ACTIVE':
        this.setState({ todos: this.props.todos.filter(t => !t.completed) })
        break;
      case 'COMPLETED':
        this.setState({ todos: this.props.todos.filter(t => t.completed) })
        break;
      case 'ALL':
        this.setState({ todos: this.props.todos })
        break;
      default:
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.todos !== this.state.todos) {
      this.setState({ todos: nextProps.todos })
    }

    //alert(nextProps.filter)
    if (nextProps.filter !== this.state.selectedTab) {
      // alert(this.state.selectedTab)
      this.setState({ selectedTab: nextProps.filter }, () => {
        // alert(this.state.selectedTab)

        switch (this.state.selectedTab) {
          case 'ACTIVE':
            this.setState({ todos: this.props.todos.filter(t => !t.completed) })
            break;
          case 'COMPLETED':
            this.setState({ todos: this.props.todos.filter(t => t.completed) })
            break;
          case 'ALL':
            this.setState({ todos: this.props.todos })
            break;
          default:
        }



      })

    }
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


          {/* {this.renderSelectedTab()}  */}
          <All todos={this.state.todos}
            addTodo={this._addTodo}
            toggleTodo={this._toggleTodo} />

        </Content>
        <Footer>
          <FooterTab>
            <Button active={this.state.selectedTab === 'ACTIVE'}
              onPress={() => this.setTab('ACTIVE')}
            >
              <Text>Active</Text>
            </Button>
            <Button active={this.state.selectedTab === 'COMPLETED'}
              onPress={() => this.setTab('COMPLETED')}
            >
              <Text>Completed</Text>
            </Button>
            <Button active={this.state.selectedTab === 'ALL'}
              onPress={() => this.setTab('ALL')}
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
    todos: state.todos,
    filter: state.filter.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);