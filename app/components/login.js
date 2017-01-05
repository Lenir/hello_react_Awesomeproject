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
  PixelRatio,
  Platform
} from 'react-native';

import {Scene, Router,Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {bindActionCreators} from 'redux';
import * as AwesomeActions from '../actions/awesomeActions';
import { connect } from 'react-redux';


class Login extends Component {
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
    const { state, actions } = this.props;
    const mapStateToProps = (state) => {
      return {
        name: state.name
        }
    }
    const signIn = () => Actions.userMain(this.state);
    return (

      <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
        <Text style={{fontSize:30, fontWeight: 'bold'}}>Sign In</Text>
        <TextInput style={{width:200, color:'#7e7e7e'}}
        onChangeText={(name) => this.setState({name})} value={this.state.name}/>
        <TextInput style={{width:200, color:'#7e7e7e'}}
        onChangeText={(id) => this.setState({id})} value={this.state.id}/>
        <Ionicons size={25} name="md-log-in" color="#909090" onPress={signIn} style={{padding:20}}/>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(AwesomeActions, dispatch)
  })
)(Login);
