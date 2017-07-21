import React, { Component } from 'react'
import {
    Container, Header, Title, Content, Footer, List, ListItem, Form,
    FooterTab, Button, Left, Right, Body, Icon, Text, CheckBox, Item, Input
} from 'native-base'
import { StyleSheet, View, ScrollView } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

export default class actives extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newTodo: null
        }
    }


    addTodo = () =>{
        this.props.addTodo(this.state.newTodo)
        this.setState({newTodo:null})
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>

                    <List dataArray={this.props.todos}
                        renderRow={(todo) =>
                            <ListItem icon>
                                <Left>
                                    <CheckBox checked={todo.completed} onPress={() => this.props.toggleTodo(todo.id)} />
                                </Left>
                                <Body>
                                    <Text>{todo.text}</Text>
                                </Body>
                            </ListItem>
                        }>
                    </List>

                </View>

                <View >
                    <ScrollView scrollEnabled={false}>
                        <Item style={{ margin: 10, marginTop: 10, marginLeft: 10 }}>
                            <Input placeholder='New Task'
                                onChangeText={(text) => { this.setState({ newTodo: text }) }}
                                value={this.state.newTodo}
                                onSubmitEditing={this.addTodo}
                                returnKeyType='send' />
                        </Item>
                        <Button block success onPress={this.addTodo} style={{ margin: 10, marginTop: 10, marginLeft: 10 }}>
                            <Text>Add</Text>
                        </Button>
                        <KeyboardSpacer />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
    //backgroundColor: '#F5FCFF'
  },
  contentContainer: {
    flex: 1
  }
});