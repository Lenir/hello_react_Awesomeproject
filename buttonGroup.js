import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TapButton,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Button extends Component {
  render() {
    return (
      <View style={{flex: 1, height: 100, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

export default class buttonGroup extends Component {
  render() {
    return(
      <View style={styles.buttonGroup}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button name="My Account"/>
          <Button name="Coworkers"/>
          <Button name="Schedules"/>
          <Button name="Others"/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  buttonGroup: {
      height: 100,
    }
})
