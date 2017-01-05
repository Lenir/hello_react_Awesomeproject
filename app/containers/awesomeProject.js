import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator
} from 'react-native';

import {Scene, Router,Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AwesomeProject extends Component {
  render() {
    return(
      <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      }}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>

          <TouchableOpacity onPress={Actions.login}>
            <Ionicons size={150} name="logo-android" color="#909090"/>
          </TouchableOpacity>
          <Text> Welcome, android user </Text>
        </View>
      </View>
    );
  }
}
