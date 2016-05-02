'use strict'

import React, {
  Navigator,
  Component,
  Text,
} from 'react-native';

import LoginScreen from '../screens/LoginScreen';


class AppNavigator extends Component {

  _renderScene(route, navigator){
    const globalNavigatorProps = {navigator}

    switch(route.taco){
      case "LoginScreen":
        return (
          <LoginScreen
            {...globalNavigatorProps}
          />
        )
    }
  }

  render() {
    return (
      <Navigator
        initalRoute={{taco: "LoginScreen"}}
        ref="appNavigator"
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })}
      />
    );
  }
}

export default AppNavigator;
