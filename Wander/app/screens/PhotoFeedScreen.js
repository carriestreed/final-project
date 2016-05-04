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


class PhotoFeedScreen extends Component {

  componentDidMount(){
    console.log('ajax return', this.props.countrySearch);
  }

  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    let photo = this.props.countrySearch.photos.photo;
    this.state = {
      photoDataSource: ds.cloneWithRows(photo),
      isLoading: 'false',
      error: 'false',
    }
  }

  navigateToPhotoInfoScreen(photoData){
    this.setState({
      isLoading: 'true',
    });
    this.props.navigator.push({
      goToScreen: 'PhotoInfoScreen',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump,
      photoId: photoData.id,
      photoUri: `https://farm${photoData.farm}.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_z.jpg`,
    });
  }

  renderPhotoRow(photoData){
    return (
      <View style={styles.dataRow}>
        <TouchableOpacity
          onPress={(event) => this.navigateToPhotoInfoScreen(photoData)}
          >
          <View>
            <Image
              style={styles.photoRow}
              source={{uri:`https://farm${photoData.farm}.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_z.jpg`}}
              />
            <Text style={styles.dataText}>
              {`more features will go here`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render(){
    return (
      <ViewContainer>
        <StatusBarBg />
        <PhotoFeedSearchComponent />
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
    marginBottom: 15,
  },
  dataText: {
    marginBottom: 40,
    marginTop: -8,
    margin: 3,
  }
});


export default PhotoFeedScreen;
