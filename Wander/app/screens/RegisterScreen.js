'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Navigator,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import ViewContainer from '../components/ViewContainer';
import ajaxHelpers from '../utils/ajaxHelpers';
import auth from '../utils/auth';

class RegisterScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'carrie',
      email: 'carrie6@carrie.com',
      password: 'testtesttest',
      password_confirmation: 'testtesttest',
      isLoading: false,
      error: false
    }
  }

  handleUsername(event){
    this.setState({
      name: event.nativeEvent.text,
    });
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

  handleConfirmPW(event){
    this.setState({
      password_confirmation: event.nativeEvent.text,
    });
  }

  handleAjaxCall(){
    let callbackFxn = function(success) {
      if (!success) {
        console.log('There was an error');
      } else {
        console.log('successful sign up')
        this.navigateToHomepageScreen();
      }
    }.bind(this);
      auth.register(this.state.email, this.state.password, this.state.password_confirmation, callbackFxn)
  }

  navigateToHomepageScreen(){
    this.setState({
      isLoading: true
    });
    this.props.navigator.push({
      goToScreen: 'HomepageScreen',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    });
  }


  render(){
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require('../images/yosemite2.jpg')}
          style={styles.bgImage} >

          <View style={styles.formContainer}>
            <Text style={styles.title}>
              {`Get ready to be inspired`}
            </Text>

            <TextInput
              placeholder='Email'
              placeholderTextColor='rgba(255,255,255,.6)'
              style={styles.formInput}
              value={this.state.email}
              onChange={this.handleUsername.bind(this)}
              />

            <TextInput
              placeholder='Password'
              placeholderTextColor='rgba(255,255,255,.6)'
              style={styles.formInput}
              value={this.state.password}
              onChange={this.handlePassword.bind(this)}
              />

            <TextInput
              placeholder='Confirm Password'
              placeholderTextColor='rgba(255,255,255,.6)'
              style={styles.formInput}
              value={this.state.password_confirmation}
              onChange={this.handleConfirmPW.bind(this)}
              />

            <TouchableHighlight
              style={styles.submitBtn}
              onPress={this.handleAjaxCall.bind(this)}
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
    title: {
      fontFamily: 'NewsCycle-Bold',
      fontSize: 40,
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


export default RegisterScreen;
