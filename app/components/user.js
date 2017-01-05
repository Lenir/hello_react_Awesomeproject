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
  constructor(props) {
    super(props);
    this.state = {
      name: 'Name',
      company: 'Company',
      id: 'ID',
      team: 'Team',
      avatarSource: require('../../img/avatar.png')
    }
  }
  render() {
    const goToMyPage = () => Actions.myPage(this.state);
    return (
      <View style={styles.user}>
        <View style={{height:120, flexDirection:'row',
        margin : 10
        }}>
            <View style={{width:120, margin:10}}>
                <Image style={styles.avatar} source={this.state.avatarSource} />
            </View>
            <View style={{flex:1, margin: 20}}>
              <Text style={{fontSize: 15, color:'#aeaeae'}}>Welcome.</Text>
              <Text style={{fontSize: 20}}>{this.state.name}</Text>
              <Text style={{color:'#9e9e9e'}}>{this.state.company} / {this.state.id}</Text>
              <Text style={{color:'#9e9e9e'}}>{this.state.team}</Text>
            </View>
        </View>
          <View style={{height:50, flexDirection: 'row',
          }}>

          <View style={styles.userBtn}>
            <Ionicons size={25} name="md-build" color="#909090" onPress={goToMyPage} />
            <Text style={{marginLeft: 2}}> My Page </Text>
          </View>

            <View style={styles.userBtn}>
              <Ionicons size={25} name="md-star" color="#909090"/>
              <Text style={{marginLeft: 2}}> Favorites </Text>
            </View>

            <View style={styles.userBtn}>
              <Ionicons size={25} name="md-log-out" color="#909090" onPress={Actions.pop} />
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
  avatar: {
    borderRadius: 75,
    width: 120,
    height: 120,
  }
  ,
  userBtn: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

AppRegistry.registerComponent('User', () => User);
