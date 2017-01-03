import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>
          Welcome to React Native, android user
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 50,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center' ,
    backgroundColor: '#d0d0d0',
  },
  navBarText :{
    fontSize: 15,
    color: '#5e5e5e',
    alignItems: 'center',
  }
})
