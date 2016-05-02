'use strict'

import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';

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
    })
  }

  handleSubmit(){
    this.setState({
      isLoading: true
    });
    console.log('logging in as', this.state.username)
    console.log('password is', this.state.password)
  }

  render(){
    return (
      <View>
        <StatusBarBg />
        <Text>{`Hi, I'm the login screen`}</Text>

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
                onPress={this.handleSubmit.bind(this)}
                underlayColor='#fff'>
                <Text style={styles.btnText}>
                  Login
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.submitBtn}
                onPress={this.handleSubmit.bind(this)}
                underlayColor='#fff'>
                <Text style={styles.btnText}>
                  Register
                </Text>
              </TouchableHighlight>

            </View>
          </Image>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: 64,
    },
    bgImage: {
      flex: 1,
      width: null,
      height: null,
      backgroundColor: 'transparent',
    },
    logo: {
      marginBottom: 20,
      fontSize: 25,
      textShadowColor: '#000',
      textAlign: 'center',
      color: '#fff'
    },
    formContainer: {
      margin: 20,
    },
    formInput: {
      height: 50,
      padding: 10,
      margin: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 6,
      color: '#fff'
    },
    btnText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    submitBtn: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'rgba(255,255,255,.5)',
      borderColor: 'rgba(255,255,255,.3)',
      borderWidth: 1,
      borderRadius: 6,
      marginTop: 10,
      margin: 4,
      justifyContent: 'center'
    },
 });


export default LoginScreen;
