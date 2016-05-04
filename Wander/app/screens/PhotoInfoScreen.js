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

    let photoId = this.state.photoId;

    ajaxHelpers.getPhotoInfo(photoId)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        title: responseData.photo.title._content,
        realname: responseData.photo.owner.realname,
        username: responseData.photo.owner.username,
        description: responseData.photo.description._content,
        lat: responseData.photo.location.latitude,
        lon: responseData.photo.location.longitude,
      })
      this.renderPhotoDescription()
    })
    .done();
  }

  constructor(props){
    super(props)
    this.state = {
      photoId: this.props.photoId,
      photoUri: this.props.photoUri,
      title: '',
      author: '',
      description: '',
      realname: '',
      username: '',
    }
  }


  renderPhotoDescription(){
    return(
      <ScrollView>

        <Image
          style={styles.photo}
          source={{uri:this.state.photoUri}}
          />
        <Text style={styles.dataText}>
          <Text style={styles.dataTitle}>
            {this.state.title}
          </Text>

          <Text style={styles.dataAuthor}>
            {`\n`}{`Taken by`} {this.state.realname || this.state.username}
          </Text>

            {`\n`}{this.state.description}
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
  dataAuthor: {
    fontStyle: 'italic',
    fontSize: 17
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
