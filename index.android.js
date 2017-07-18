import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';

import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore';

const store = configureStore();

const ToDoRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('ToDoRedux', () => ToDoRedux);
