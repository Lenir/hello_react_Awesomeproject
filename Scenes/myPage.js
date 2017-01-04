import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
  TextInput,
  CameraRoll,
} from 'react-native';

import {Scene, Router,Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Input Name',
      company: 'Input Company name',
      id: 'Input ID',
      team: 'Input team name'};

  }
  render() {
    var userImage = require('../img/avatar.png');
    return (
      <View style={{
        backgroundColor: '#dfdfdf',
        alignItems: 'center',
        flex:1
      }}>
        <Text style={{fontSize:25, margin:15}}>My Page</Text>
        <View style={{
          margin: 10,
        }}>
          <View style={{
            flexDirection:'row'
          }}>
            <View style={{margin:10}}>
              <Text>Photo</Text>
              <Image source={userImage} style={{width:120,height:120}}/>
              <TouchableOpacity
                onPress={() => Alert.alert(
                  'Alert Title',
                  'Alert message',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed!')},
                  ]
              )}>

                <View style={{width:120, height:15, backgroundColor: 'gray',alignItems:'center'}}>
                  <Text style={{fontSize:10, color:'white'}}>Edit Photo</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <Text>Name</Text>
              <TextInput style={{width:200, color:'#7e7e7e'}} onChangeText={(name) => this.setState({name})} value={this.state.name}/>
              <Text>ID</Text>
              <TextInput style={{width:200, color:'#7e7e7e'}} onChangeText={(id) => this.setState({id})} value={this.state.id}/>
            </View>
          </View>
        </View>

        <View style={{
          flexDirection:'row'
        }}>
          <View style={{margin:10}}>
            <Text>Company</Text>
            <TextInput style={{width:160, color:'#7e7e7e'}} onChangeText={(company) => this.setState({company})} value={this.state.company}/>
          </View>
          <View style={{margin:10}}>
            <Text>Team</Text>
            <TextInput style={{width:160, color:'#7e7e7e'}} onChangeText={(team) => this.setState({team})} value={this.state.team}/>
          </View>
        </View>

        <TouchableOpacity onPress={Actions.pop}>
          <Text>Commit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
