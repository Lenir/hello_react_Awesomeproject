import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class User extends Component {
  render() {
    return (
      <View style={styles.user}>
        <View style={{height:120, flexDirection:'row',
        // borderWidth:1,
        margin : 10
        }}>
            <View style={{width:110}}>
              <Ionicons size={130} name='md-person' color="#909090" />
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
            <Ionicons size={30} name="md-build" color="#909090" />
            <Text style={{marginLeft: 2}}> My Page </Text>
          </View>

            <View style={styles.userBtn}>
              <Ionicons size={30} name="md-star" color="#909090" />
              <Text style={{marginLeft: 2}}> Favorites </Text>
            </View>

            <View style={styles.userBtn}>
              <Ionicons size={30} name="md-exit" color="#909090" />
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
