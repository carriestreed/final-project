'use strict'

import React, {
  Navigator,
  Component,
  Text,
  View,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import LoginScreen from '../screens/LoginScreen';
import HomepageScreen from '../screens/HomepageScreen';
import PhotoFeedScreen from '../screens/PhotoFeedScreen';
import PhotoInfoScreen from '../screens/PhotoInfoScreen';
import RegisterScreen from '../screens/RegisterScreen';


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

        case 'RegisterScreen':
        return (
          <RegisterScreen
            {...globalNavigatorProps}
          />
        )

        case 'HomepageScreen':
        return (
          <HomepageScreen
            {...globalNavigatorProps}
            name={route.name}
            email={route.email}
            password={route.password}
            password_confirmation={route.password_confirmation}
          />
        )

        case 'PhotoFeedScreen':
        return (
          <PhotoFeedScreen
            {...globalNavigatorProps}
            countrySearch={route.countrySearch}
          />
        )

        case 'PhotoInfoScreen':
        return (
          <PhotoInfoScreen
            {...globalNavigatorProps}
            photoId={route.photoId}
            photoUri={route.photoUri}
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

  render(){
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
