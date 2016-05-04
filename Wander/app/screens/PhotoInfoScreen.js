'use strict'

import React, {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import PhotoFeedSearchComponent from '../components/PhotoFeedSearchComponent';
import ViewContainer from '../components/ViewContainer';
import ajaxHelpers from '../utils/ajaxHelpers';

class PhotoInfoScreen extends Component {

  componentDidMount(){
    console.log('youre in the photo INFO screen!');
    console.log('photo uri', this.props.photoUri)
    console.log('photo id', this.props.photoId)

    let photoId = this.state.photoId;

    ajaxHelpers.getPhotoInfo(photoId)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        ajaxReturn: responseData
      })
      this.renderPhotoDescription()
    })
    .done();
  }

  constructor(props){
    super(props)
    this.state = {
      ajaxReturn: [],
      photoId: this.props.photoId,
      photoUri: this.props.photoUri
    }
  }

  renderPhotoDescription(){
    console.log('in render phto fxn, props are', this.state.ajaxReturn)

    return(
      <ScrollView>
        <Image
          style={styles.photo}
          source={{uri:this.state.photoUri}}/>

      </ScrollView>
    )
  }

  render(){
    return (
      <ViewContainer>
        <StatusBarBg />
        <PhotoFeedSearchComponent />
        {this.renderPhotoDescription()}
      </ViewContainer>
    )
  }
}

const styles=StyleSheet.create({
  dataText: {
    fontSize: 20,
    margin: 10,
    lineHeight: 30,
  },
  dataTitle: {
    fontSize: 25
  },
  photo: {
    flex: 1,
    width: null,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 15,
  }
});

export default PhotoInfoScreen;
