'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Navigator,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import ViewContainer from '../components/ViewContainer';
import PhotoFeedSearchComponent from '../components/PhotoFeedSearchComponent';
import ajaxHelpers from '../utils/ajaxHelpers';


class PhotoFeedScreen extends Component {

  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    let photo = (this.props.countrySearch.photos.photo);
    this.state = {
      photoDataSource: ds.cloneWithRows(photo),
      isLoading: 'false',
      error: 'false',
      selected: 'featured'
    }
  }

  navigateToPhotoInfoScreen(photoData){
    let photoId = photoData.id;
    ajaxHelpers.getPhotoInfo(photoId)
    .then((response) => response.json())
    .then((responseData) => {

      this.props.navigator.push({
        goToScreen: 'PhotoInfoScreen',
        sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump,
        photoId: photoData.id,
        photoUri: `https://farm${photoData.farm}.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_z.jpg`,

        title: responseData.photo.title._content,
        realname: responseData.photo.owner.realname,
        username: responseData.photo.owner.username,
        description: responseData.photo.description._content,
        lat: responseData.photo.location.latitude,
        lon: responseData.photo.location.longitude,
      });
    });
  }

  renderPhotoRow(photoData){
    return (
      <View style={styles.dataRow}>
        <TouchableWithoutFeedback
          onPress={(event) => this.navigateToPhotoInfoScreen(photoData)}
          >
          <View>
            <Image
              style={styles.photoRow}
              source={{uri:`https://farm${photoData.farm}.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_z.jpg`}}
              />
            <Text style={styles.dataText}>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  render(){
    return (
      <ViewContainer>
        <StatusBarBg />
        <ListView
          style={styles.mainContainer}
          dataSource={this.state.photoDataSource}
          renderRow={(photoData) => {return this.renderPhotoRow(photoData)}}
        />
      </ViewContainer>
    )
  }
}

const styles=StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
  },
  photoRow: {
    flex: 1,
    width: null,
    height: 600,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  dataText: {
    marginBottom: 10,
    marginTop: -8,
    margin: 3,
  }
});


export default PhotoFeedScreen;
