/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {Provider} from 'react-redux';
import React, { Component } from 'react';
import {
  NativeRouter,
  Route,
  Link,
  Switch
} from 'react-router-native';
import Home from './src/components/Test/Home/Home.js';
import Welcome from './src/components/Test/Welcome/Welcome.js';
import Main from './src/components/Test/QQCenter/Main/Header.js';
import store from './src/store/store.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <NativeRouter>
              <Switch>
                <Route exact path='/' component={Welcome}/>
                <Route path="/home" component={Home}/>
                <Route path="/QQCenter" component={Main}/>
              </Switch>
            </NativeRouter>
        </Provider>
    );
  }
}


