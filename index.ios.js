import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'

import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import initialState from './src/reducers/initialState'

const store = configureStore(initialState)

const ToDoRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('ToDoRedux', () => ToDoRedux)
