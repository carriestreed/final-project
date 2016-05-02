'use strict'

import React, {
  Navigator,
  Component,
  Text,
} from 'react-native';

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
          <Text>{`somethings not right, yo ${route}`}</Text>
        )
      }
    }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref='appNavigator'
        renderScene={this._renderScene}
      />
    );
  }

}
export default AppNavigator;
