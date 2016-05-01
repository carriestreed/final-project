import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS
} from 'react-native';

import Main from './App/Components/Main';
import StatusBarBg from './App/Components/StatusBarBg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

class Wander extends Component {
  render() {
    return (
      <View>
        <StatusBarBg />
        <Text>Hello</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Wander', () => Wander);
