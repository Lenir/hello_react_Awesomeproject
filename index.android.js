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
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <Body />
      </View>
    );
  }
}
//
class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text>
          NavBar
        </Text>
      </View>
    )
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
    )
  }
}
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  /*
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  */
  navbar: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center' ,
    backgroundColor: 'gray',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
