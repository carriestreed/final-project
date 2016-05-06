'use strict'

import React, {
  Component,
  TabBarIOS,
} from 'react-native';


import Test from './Test'
import Test2 from './Test2'

import HomepageScreen from '../screens/HomepageScreen';
import PhotoFeedScreen from '../screens/PhotoFeedScreen';
import AppNavigator from '../navigation/AppNavigator';

class TabsComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }

  render(){
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'home'}
          title={'HOME'}
          onPress={() => console.log('home pressed')}
          >
          <AppNavigator
            initialRoute={{goToScreen: 'HomepageScreen'}}/>
        </TabBarIOS.Item>


        <TabBarIOS.Item
          selected={this.state.selectedTab === 'feed'}
          title={'FEATURED'}
          onPress={() => console.log('feed pressed')}
          >
          <AppNavigator
            initialRoute={{goToScreen: 'PhotoFeedScreen'}}/>
        </TabBarIOS.Item>


      </TabBarIOS>
    )
  }
}

export default TabsComponent;
