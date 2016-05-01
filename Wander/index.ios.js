import React, {
  AppRegistry,
  Text,
  View,
  Component,
  NavigatorIOS
} from 'react-native';

import StatusBarBg from './App/Components/StatusBarBg';
import LoginScreen from './App/Screens/LoginScreen';


class Wander extends Component {
  render() {
    return (
      <View>
        <StatusBarBg />
        <LoginScreen />
      </View>
    );
  }
}

AppRegistry.registerComponent('Wander', () => Wander);
