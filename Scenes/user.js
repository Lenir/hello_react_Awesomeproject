import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  CameraRoll,
  TouchableHighlight,
  Alert
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Scene, Router,Actions} from 'react-native-router-flux';

export default class User extends Component {
  render() {
    var userImage = require('../img/avatar.png');
    return (
      <View style={styles.user}>
        <View style={{height:120, flexDirection:'row',
        margin : 10
        }}>
            <View style={{width:110}}>
                <Image source={userImage} style={{width: 110, height: 110}}/>

                <TouchableHighlight
                  onPress={() => Alert.alert(
                    'Alert Title',
                    'Alert message',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed!')},
                    ]
                )}>

                  <View style={{width:110, height:15, backgroundColor: 'gray',alignItems:'center'}}>
                    <Text style={{fontSize:10, color:'white'}}>Edit Photo</Text>
                  </View>
                </TouchableHighlight>
            </View>
            <View style={{flex:1, margin: 5}}>
              <Text style={{fontSize: 20}}> Name </Text>
              <Text style={{color:'#9e9e9e'}}> Company / ID </Text>
              <Text style={{color:'#9e9e9e'}}> Team </Text>
            </View>
        </View>
          <View style={{height:50, flexDirection: 'row',
          }}>

          <View style={styles.userBtn}>
            <Ionicons size={30} name="md-build" color="#909090" onPress={Actions.myPage} />
            <Text style={{marginLeft: 2}}> My Page </Text>
          </View>

            <View style={styles.userBtn}>
              <Ionicons size={30} name="md-star" color="#909090" />
              <Text style={{marginLeft: 2}}> Favorites </Text>
            </View>

            <View style={styles.userBtn}>
              <Ionicons size={30} name="md-exit" color="#909090" onPress={Actions.pop} />
              <Text style={{marginLeft: 2}}> Logout </Text>
            </View>

        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  user: {
    height: 190,
    backgroundColor: '#efefef'
  },
  userBtn: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

AppRegistry.registerComponent('User', () => User);
