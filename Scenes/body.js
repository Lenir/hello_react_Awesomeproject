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

export default class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>
          Body!
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
