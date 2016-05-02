'use strict'

import React, {
  AppRegistry,
  Text,
  Component,
} from 'react-native';

import AppNavigator from './app/navigation/AppNavigator'

class Wander extends Component {
  render() {
    return (
      <AppNavigator
        initialRoute={{goToScreen: 'LoginScreen'}}
      />
    );
  }
}

AppRegistry.registerComponent('Wander', () => Wander);
