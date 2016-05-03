'use strict'

import React, {
  Component,
  View,
  Text,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';

class PhotoInfoScreen extends Component {

  render(){
    return (
      <View>
        <StatusBarBg />
        <Text>{`I'm the photo info screen`}</Text>
      </View>
    )
  }
}

export default PhotoInfoScreen;
