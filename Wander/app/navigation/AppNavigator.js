'use strict'

import React, {
  Navigator,
  Component,
  Text,
  View,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import LoginScreen from '../screens/LoginScreen';
import PhotoFeedScreen from '../screens/PhotoFeedScreen';


class AppNavigator extends Component {

  _renderScene(route, navigator){
    let globalNavigatorProps = {navigator}

      switch(route.goToScreen){
        case 'LoginScreen':
        return (
          <LoginScreen
            {...globalNavigatorProps}
          />
        )

        case 'PhotoFeedScreen':
        return (
          <PhotoFeedScreen
            {...globalNavigatorProps}
          />
        )

        default:
        return (
          <View>
            <StatusBarBg />
            <Text>{`somethings not right, yo ${route}`}</Text>
          </View>
        )
      }
    }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref='appNavigator'
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })}
      />
    );
  }
}



export default AppNavigator;
