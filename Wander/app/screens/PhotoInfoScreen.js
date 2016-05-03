'use strict'

import React, {
  Component,
  View,
  Text,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import PhotoFeedSearchComponent from '../components/PhotoFeedSearchComponent';


class PhotoInfoScreen extends Component {

  componentDidMount(){
    console.log('youre in the photo INFO screen!');
    console.log('PHOTO PROPS are', this.props.photoInfo);
  }

  constructor(props){
    super(props)
    this.state = {
      photoInfo: this.props.photoInfo
    }
  }

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
