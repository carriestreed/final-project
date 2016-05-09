'use strict'

import React, {
  AsyncStorage,
  Component,
  View,
  ScrollView,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import ViewContainer from '../components/ViewContainer';
import HomepageSearchComponent from '../components/HomepageSearchComponent';
import FeaturedComponent from '../components/FeaturedComponent';

class HomepageScreen extends Component {

  hpContent(){
    return (
      <View>
        <HomepageSearchComponent
          navigator={this.props.navigator}
          />
        <FeaturedComponent
          navigator={this.props.navigator}
          />
      </View>
    )
  }

  render(){
    return (
      <ViewContainer >
        <StatusBarBg />
        <ScrollView>
          {this.hpContent()}
        </ScrollView>
      </ViewContainer>
    )
  }
}


export default HomepageScreen;
