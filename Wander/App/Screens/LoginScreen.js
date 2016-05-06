'use strict'

import React, {
  AsyncStorage,
  Component,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  TextInput,
  Navigator
} from 'react-native';

import auth from '../utils/auth';


class LoginScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: 'Carrie@gmail.com',
      password: 'Password',
      isLoading: false,
      error: false,
      success: '',
    }
  }

  handleEmail(event){
    this.setState({
      email: event.nativeEvent.text,
    });
  }

  handlePassword(event){
    this.setState({
      password: event.nativeEvent.text,
    });
  }

  handleAjaxCall(){
    console.log('handling ajax call')
    let loginCallbackFxn = function(success) {
      if (!success) {
        console.log('There was an error');
      } else {
        console.log('successful login')
        this.navigateToHomepageScreen();
      }
    }.bind(this);
      auth.login(this.state.email, this.state.password, loginCallbackFxn)
  }

  navigateToHomepageScreen(){
    this.setState({
      isLoading: true
    });
    this.props.navigator.push({
      goToScreen: 'TabsComponent',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      username: this.state.username,
      password: this.state.password
    });
  }

  navigateToRegisterScreen(){
    this.setState({
      isLoading: true
    });
    this.props.navigator.push({
      goToScreen: 'RegisterScreen',
    });
  }

  componentDidMount() {
    const keys = ["accessToken", "client", "uid"];
    AsyncStorage.multiGet(keys, (err, stores) => {
     stores.map((result, i, store) => {
       // get at each store's key/value so you can work with it
       let key = store[i][0];
       let value = store[i][1];
       console.log('key', key, 'val', value);
      });
    });
  }

  render(){
    return (
      <View style={styles.mainContainer}>

        <Image
          source={require('../images/yosemite2.jpg')}
          style={styles.bgImage} >

          <View style={styles.formContainer}>
            <Text style={styles.logo}>
              {`WANDER`}
            </Text>

            <TextInput
              placeholder='Email'
              placeholderTextColor='rgba(255,255,255,.6)'
              style={styles.formInput}
              value={this.state.email}
              onChange={this.handleEmail.bind(this)}
              />
            <TextInput
              placeholder='Password'
              placeholderTextColor='rgba(255,255,255,.6)'
              style={styles.formInput}
              value={this.state.password}
              onChange={this.handlePassword.bind(this)}
              />

            <TouchableHighlight
              style={styles.submitBtn}
              onPress={this.handleAjaxCall.bind(this)}
              underlayColor='rgba(24, 125, 173, 0.8)'>
              <Text style={styles.btnText}>
                {`Login`}
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submitBtn}
              onPress={this.navigateToRegisterScreen.bind(this)}
              underlayColor='rgba(24, 125, 173, 0.8)'>
              <Text style={styles.btnText}>
                {`Register`}
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
      resizeMode: 'cover',
    },
    formContainer: {
      marginTop: 120,
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
      color: 'rgba(255,255,255,.9)'
    },
    formInput: {
      fontFamily: 'NewsCycle-Bold',
      fontSize: 25,
      height: 50,
      padding: 10,
      margin: 5,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'rgba(255,255,255,.3)',
      backgroundColor: 'rgba(0,0,0, 0.3)',
      color: 'rgba(255,255,255,.7)'
    },
    btnText: {
      fontFamily: 'NewsCycle-Bold',
      fontSize: 25,
      color: 'rgba(255, 255, 255, .7)',
      alignSelf: 'center'
    },
    submitBtn: {
      height: 50,
      flexDirection: 'row',
      backgroundColor: 'rgba(8, 47, 66, 0.9)',
      borderColor: 'rgba(0,0,0,.1)',
      borderWidth: 1,
      borderRadius: 6,
      marginTop: 10,
      margin: 4,
      justifyContent: 'center'
    },
 });


export default LoginScreen;
