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
        <Ionicons size={35} name={this.props.iconName} color="#909090" />
        <Text style={{marginTop: 5, color: '#A0A0A0'}}>{this.props.name}</Text>
      </View>
    )
  }
}

export default class tabs extends Component {
  render() {
    return(
      <View style={styles.tabs}>
        <TabButton name="Home" iconName="md-home"/>
        <TabButton name="Google Plus"  iconName="logo-googleplus"/>
        <TabButton name="Github" iconName="logo-github"/>
        <TabButton name="Dropbox" iconName="logo-dropbox"/>
        <TabButton name="Settings" iconName="md-settings"/>
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
