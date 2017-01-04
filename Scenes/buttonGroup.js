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
      <View style={{flex: 1, height: 100, borderWidth: 0.3, borderColor:"#909090",justifyContent: 'center', alignItems: 'center'}}>
        <Ionicons size={40} name={this.props.iconName} color="#909090" />
        <Text style={{marginTop: 5}}>{this.props.name}</Text>
      </View>
    )
  }
}

export default class buttonGroup extends Component {
  render() {
    return(
      <View style={styles.buttonGroup}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button name="My Account" iconName="md-person"/>
          <Button name="Peers"  iconName="md-people"/>
          <Button name="Schedules" iconName="md-calendar" />
          <Button name="Others" iconName="ios-more" />
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
