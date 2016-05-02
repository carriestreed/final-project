'use strict'

import React, {
  Component,
  View,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';

class LoginScreen extends Component {

  render(){
    return (
      <View>
        <StatusBarBg />
        <Text>{`Hi, I'm the login screen`}</Text>
      </View>
    )
  }


}
export default LoginScreen;
