import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Keyboard,
  TextInput
} from 'react-native';

import Body from './body.js'
import User from './user.js';
import NavBar from './navBar.js';
import Tabs from './tabs.js';
import ButtonGroup from './buttonGroup.js';
import { Scene, Router, Actions } from 'react-native-router-flux';

export default class UserMain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex:1,
          flexDirection: 'column',
        }}>
          <User />
          <ButtonGroup />
          <Body />
          <Tabs />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  wrapper: {
    backgroundColor: 'white'
  },
  button: {
    padding: 5,
    backgroundColor: 'white'
  },
});
