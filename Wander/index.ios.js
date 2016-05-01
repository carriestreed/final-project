import Main from './App/Components/Main';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

class Wander extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Wander',
          component: Main
        }}
      />
    );
  }
}

AppRegistry.registerComponent('Wander', () => Wander);
