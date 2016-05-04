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
import ViewContainer from '../components/ViewContainer.js';

class PhotoInfoScreen extends Component {

  componentDidMount(){
    console.log('youre in the photo INFO screen!');
    console.log('photo url', this.props.photoUri);
    console.log('photo desc', this.props.photoData);
  }

  constructor(props){
    super(props)
    this.state = {
      photoInfo: this.props.photoInfo,
      photoUri: this.props.photoUri
    }
  }

  renderPhotoDescription(){
    console.log('in render phto fxn, props are', this.state.photoInfo)
    return(
      <ScrollView>
        <Image
          style={styles.photo}
          source={{uri:this.state.photoUri}}/>
        <Text style={styles.dataText}>
        <Text style={styles.dataTitle}>
          {this.state.photoInfo.title}
        </Text> {'\n'}
          {`Taken by `}{this.state.photoInfo.author}
          {` in `}{this.state.photoInfo.location}{'\n'}
          {this.state.photoInfo.description}
        </Text>
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
