import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Container, Header, Title, Content, Footer, List, ListItem, Form,
  FooterTab, Button, Left, Right, Body, Icon, Text, CheckBox, Item, Input
} from 'native-base'
import { StyleSheet, View, ScrollView } from 'react-native'

import * as actions from './actions/index'
import KeyboardSpacer from 'react-native-keyboard-spacer'




class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      newTodo:null
    }
  }

  checkAsCompleted = (id) => {
    this.props.actions.toggleTodo(id)
  }

  addTodo = () => {
    this.props.actions.addTodo(this.state.newTodo)
    this.setState({newTodo: null});
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
            <Title>To Do Redux</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.container}>

          <View style={styles.contentContainer}>

            <List dataArray={this.props.todos}
              renderRow={(todo) =>
                <ListItem icon>
                  <Left>
                    <CheckBox checked={todo.completed} onPress={() => this.checkAsCompleted(todo.id)} />
                  </Left>
                  <Body>
                    <Text>{todo.text}</Text>
                  </Body>
                </ListItem>
              }>
            </List>

          </View>

          <View style={styles.footer}>
            <ScrollView scrollEnabled={false}>
              <Item style={{ margin: 10, marginTop: 10, marginLeft: 10 }}>
                <Input placeholder='New To Do' 
                       onChangeText={(text) => {this.setState({newTodo:text})} }
                       value={this.state.newTodo}
                       onSubmitEditing={this.addTodo} 
                       returnKeyType='send' />
              </Item>
              <Button block success onPress={this.addTodo} style={{ margin: 10, marginTop: 10, marginLeft: 10 }}>
                <Text>Add</Text>
              </Button>
              <KeyboardSpacer/>
            </ScrollView>
          </View>


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

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1
  },
  footer: {
    //height: 100
  }
});

function mapStateToProps(state, ownProps) {
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