import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class User extends Component {
  render() {
    return (
      <View style={styles.user}>
        <View style={{height:120, flexDirection:'row',
        // borderWidth:1,
        margin : 10
        }}>
            <View style={{width:100}}>
              <Image source={require('./img/avatar.png')} style={{width: 100, height: 100}}/>
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
            <View style={{width: 30, height: 30, backgroundColor:'gray'}} />
            <Text> My Page </Text>
          </View>

            <View style={styles.userBtn}>
              <View style={{width: 30, height: 30, backgroundColor:'gray'}} />
              <Text> Faborites </Text>
            </View>

            <View style={styles.userBtn}>
              <View style={{width: 30, height: 30, backgroundColor:'gray'}} />
              <Text> Logout </Text>
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
