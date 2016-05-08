'use strict'

import React, {
  Component,
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
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
    this.setState({
      selectedTab: 'home'
    });
  }

  selectedFeatured(){
    ajaxHelpers.callFeatured()
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        isLoading: true,
        ajaxReturn: responseData,
        selectedTab: 'featured'
      })
    })
    .done();
  }

  render(){
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'home'}
          title={'HOME'}
          iconName="home"
          onPress={this.selectedHome.bind(this)}
          >
          <AppNavigator
            initialRoute={{
              goToScreen:'HomepageScreen'}}
            />
        </Icon.TabBarItemIOS>


        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'featured'}
          title={'FEATURED'}
          iconName="star"
          onPress={this.selectedFeatured.bind(this)}
          >
          <AppNavigator
            initialRoute={{
              goToScreen:'PhotoFeedScreen',
              countrySearch: this.state.ajaxReturn}}
            />
        </Icon.TabBarItemIOS>


      </TabBarIOS>
    )
  }
}

export default TabsComponent;
