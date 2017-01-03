import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TapButton
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class TabButton extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: 30, width: 30, backgroundColor: 'gray'}}></View>
        <Text style={{marginTop: 5, color: '#A0A0A0'}}>{this.props.name}</Text>
      </View>
    )
  }
}

export default class tabs extends Component {
  render() {
    return(
      <View style={styles.tabs}>
        <TabButton name="Home" iconName="ios-home-outline"/>
        <TabButton name="Google Plus"/>
        <TabButton name="Github"/>
        <TabButton name="Dropbox"/>
        <TabButton name="Settings"/>
      </View>
    )

  }
}
const styles = StyleSheet.create({
  tabs: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#A0A0A0',
  }
});
