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
import MapViewComponent from '../components/MapViewComponent';
import ajaxHelpers from '../utils/ajaxHelpers';

class PhotoInfoScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      photoId: this.props.photoId,
      photoUri: this.props.photoUri,
    }
  }

  componentWillMount(){
    let photoId = this.state.photoId;

    ajaxHelpers.getPhotoInfo(photoId)
    .then((response) => response.json())
    .then((responseData) => {
      console.log('returning ajax', responseData)
      this.setState({
        title: responseData.photo.title._content,
        realname: responseData.photo.owner.realname,
        username: responseData.photo.owner.username,
        description: responseData.photo.description._content,
        lat: responseData.photo.location.latitude,
        lon: responseData.photo.location.longitude,
      })
    })
    .done();
  }


  renderPhotoDescription(){
    console.log('photo info screen', this.state.lat)
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
            {`\n`}{`Photo by`} {this.state.realname || this.state.username}
          </Text>

          {`\n`}{this.state.description}
        </Text>

        <MapViewComponent
          title={this.state.title}
          lat={this.state.lat}
          lon={this.state.lon}/>

      </ScrollView>
    )
  }

  render(){
    console.log('RENDERING EVERYTHING')
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
