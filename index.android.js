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

import Splash from './Scenes/splash.android'
import UserMain from './Scenes/userMain'
import User from './Scenes/user';
import MyPage from './Scenes/myPage'
import NavBar from './Scenes/navBar';
import Body from './Scenes/body'
import Tabs from './Scenes/tabs';
import ButtonGroup from './Scenes/buttonGroup';

export default class AwesomeProject extends Component {
  render() {
    return (
      <Router>
        <Scene key="root"  hideNavBar hideTabBar>
          <Scene key="user" component={User} />
          <Scene key="userMain" component={UserMain} />
          <Scene key="myPage" component={MyPage} />
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
