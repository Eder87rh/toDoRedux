import React, { Component } from 'react'
import {
    Container, Header, Title, Content, Footer, List, ListItem, Form,
    FooterTab, Button, Left, Right, Body, Icon, Text, CheckBox, Item, Input
} from 'native-base'
import { StyleSheet, View, ScrollView } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

export default class completed extends Component {

 
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