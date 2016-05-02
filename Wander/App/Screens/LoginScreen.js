'use strict'

import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  TextInput,
  Navigator
} from 'react-native';


class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      error: false
    }
  }

  handleUsername(event){
    this.setState({
      username: event.nativeEvent.text,
    });
  }

  handlePassword(event){
    this.setState({
      password: event.nativeEvent.text,
    });
  }

  _navigateToPhotoFeedScreen(){
    this.setState({
      isLoading: true
    });
    this.props.navigator.push({
      goToScreen: 'PhotoFeedScreen',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      username: this.state.username,
      password: this.state.password
    });
  }

  _navigateToRegisterScreen(){
    this.setState({
      isLoading: true
    });
    console.log('should Route to Register screen');
  }

  render(){
    return (
      <View style={styles.mainContainer}>

        <Image
          source={require('../images/bolivia.jpg')}
          style={styles.bgImage} >

          <View style={styles.formContainer}>
            <Text style={styles.logo}>
              WANDER
            </Text>

            <TextInput
              placeholder='username'
              style={styles.formInput}
              value={this.state.username}
              onChange={this.handleUsername.bind(this)}
              />
            <TextInput
              placeholder='password'
              style={styles.formInput}
              value={this.state.password}
              onChange={this.handlePassword.bind(this)}
              />

            <TouchableHighlight
              style={styles.submitBtn}
              onPress={this._navigateToPhotoFeedScreen.bind(this)}
              underlayColor='#fff'>
              <Text style={styles.btnText}>
                Login
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submitBtn}
              onPress={this._navigateToRegisterScreen.bind(this)}
              underlayColor='#fff'>
              <Text style={styles.btnText}>
                Register
              </Text>
            </TouchableHighlight>

          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    bgImage: {
      flex: 1,
      width: null,
      height: null,
      backgroundColor: 'transparent',
    },
    formContainer: {
      marginTop: 140,
      margin: 20,
    },
    logo: {
      fontFamily: 'NewsCycle-Bold',
      fontSize: 60,
      textShadowColor: 'rgba(0,0,0,.5)',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 5,
      marginBottom: 100,
      textAlign: 'center',
      color: '#fff'
    },
    formInput: {
      fontFamily: 'NewsCycle-Bold',
      fontSize: 30,
      height: 60,
      padding: 10,
      margin: 5,
      borderWidth: 3,
      borderRadius: 6,
      borderColor: 'rgba(255, 255, 255,.8)',
      color: '#2f2f2f'
    },
    btnText: {
      fontFamily: 'NewsCycle-Bold',
      fontSize: 25,
      color: '#fff',
      alignSelf: 'center'
    },
    submitBtn: {
      height: 60,
      flexDirection: 'row',
      backgroundColor: 'rgba(102, 200, 255,1)',
      borderColor: 'rgba(0,0,0,.1)',
      borderWidth: 1,
      borderRadius: 6,
      marginTop: 10,
      margin: 4,
      justifyContent: 'center'
    },
 });


export default LoginScreen;
