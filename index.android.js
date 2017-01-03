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
  TouchableHighlight,
  Alert,
  Keyboard,
  TextInput,
  Navigator
} from 'react-native';
import User from './user.js';
import NavBar from './navBar.js';
import Tabs from './tabs.js';
import ButtonGroup from './buttonGroup.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex:1,
          flexDirection: 'column',
        }}>

        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            'Alert message',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>Alert with message and default button</Text>
          </View>
        </TouchableHighlight>
          <NavBar />
          <User />
          <ButtonGroup />
          <Body />

          <Tabs />
        </View>
      </View>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>
          Body
        </Text>
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
  body: {
    flex:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
