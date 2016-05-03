'use strict'

import React, {
  Component,
  View,
  ScrollView,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import ViewContainer from '../components/ViewContainer';
import HomepageSearchComponent from '../components/HomepageSearchComponent';
import FeaturedComponent from '../components/FeaturedComponent';

class HomepageScreen extends Component {

  componentDidMount(){
    console.log('HELLO from the homepage screen!!!');
    console.log('USER is', this.props.username);
    console.log('PASSWORD is', this.props.password);
  }

  hpContent(){
    return (
      <View>
        <HomepageSearchComponent
          navigator={this.props.navigator}
          />
        <FeaturedComponent />
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
