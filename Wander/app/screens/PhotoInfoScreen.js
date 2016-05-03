'use strict'

import React, {
  Component,
  View,
  Text,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import PhotoFeedSearchComponent from '../components/PhotoFeedSearchComponent';


class PhotoInfoScreen extends Component {

  render(){
    return (
      <View>
        <StatusBarBg />
        <PhotoFeedSearchComponent />
      </View>
    )
  }
}

export default PhotoInfoScreen;
