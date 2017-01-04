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

import ImagePicker from 'react-native-image-picker';
import {Scene, Router,Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default class MyPage extends Component {
    state = {
      name: 'Input Name',
      company: 'Input Company name',
      id: 'Input ID',
      team: 'Input team name',
      avatarSource:  require('../img/avatar.png'),
      videoSource: null
    };
    selectPhotoTapped() {

      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          var source;

          // You can display the image using either:
          source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

          //Or:
          if (Platform.OS === 'android') {
            source = {uri: response.uri, isStatic: true};
          } else {
            source = {uri: response.uri.replace('file://', ''), isStatic: true};
          }

          this.setState({
            avatarSource: source
            });
          }
        });
    }
    //
    selectVideoTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled video picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          videoSource: response.uri
        });
      }
    });
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
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                <Image style={styles.avatar} source={this.state.avatarSource} />
              }

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 130,
    height: 130
  }
});
