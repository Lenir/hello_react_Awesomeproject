/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {Scene, Router,Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './components/login'
import Splash from './components/splash.android'
import UserMain from './components/userMain'
import User from './components/user';
import MyPage from './components/myPage'
import NavBar from './components/navBar';
import Body from './components/body'
import Tabs from './components/tabs';
import ButtonGroup from './components/buttonGroup';

export default class AwesomeProject extends Component {
  render() {

    return (
      <Router>
        <Scene key="root"  hideNavBar hideTabBar>
          <Scene key="user" component={User} />
          <Scene key="login" component={Login} direction="vertical"/>
          <Scene key="userMain" component={UserMain} />
          <Scene key="myPage" component={MyPage} direction="vertical"/>
          <Scene key="splash" component={Splash} initial={true} />
          <Scene key="tabs" component={Tabs} />
          <Scene key="buttonGroup" component={ButtonGroup} />
          <Scene key="navBar" component={NavBar} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
