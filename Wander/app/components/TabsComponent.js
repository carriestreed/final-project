'use strict'

import React, {
  Component,
  TabBarIOS,
} from 'react-native';


import HomepageScreen from '../screens/HomepageScreen';
import PhotoFeedScreen from '../screens/PhotoFeedScreen';
import AppNavigator from '../navigation/AppNavigator';
import ajaxHelpers from '../utils/ajaxHelpers';

class TabsComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      ajaxReturn: [],
      selectedTab: 'home'
    }
  }

  selectedHome(){
    console.log('selecting home')
    this.setState({
      ajaxReturn: '',
      selectedTab: 'home'
    });
  }

  featuredAjaxCall(){
    console.log('in JAPAN ajax call fxn')
    ajaxHelpers.callFeatured()
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        ajaxReturn: responseData,
      })
      this.selectedFeatured(responseData)
    })
    .done();
  }


  selectedFeatured(responseData){
    this.setState({
      isLoading: true,
      selectedTab: 'featured'
    });
  }

  render(){
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'home'}
          title={'HOME'}
          onPress={this.selectedHome.bind(this)}
          >
          <AppNavigator
            initialRoute={{goToScreen:'HomepageScreen'}}
            />
        </TabBarIOS.Item>


        <TabBarIOS.Item
          selected={this.state.selectedTab === 'featured'}
          title={'FEATURED'}
          icon={{uri:'featured'}}
          onPress={this.featuredAjaxCall.bind(this)}
          >
          <AppNavigator
            initialRoute={{goToScreen:'PhotoFeedScreen',
                           countrySearch: this.state.ajaxReturn}}
            />
        </TabBarIOS.Item>


      </TabBarIOS>
    )
  }
}

export default TabsComponent;
