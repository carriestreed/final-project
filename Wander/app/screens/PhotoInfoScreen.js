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

  renderPhotoDescription(){
    return(
      <ScrollView>
        <Image
          style={styles.photo}
          source={{uri:this.props.photoUri}} />

        <Text style={styles.dataText}>
          <Text style={styles.dataTitle}>
            {this.props.title}
          </Text>

          <Text style={styles.dataAuthor}>
            {`\n`}{`Photo by`} {this.props.realname || this.props.username}
          </Text>

          {`\n`}{this.props.description}
        </Text>

        <MapViewComponent
          lat={this.props.lat}
          lon={this.props.lon} />

      </ScrollView>
    )
  }

  render(){
    return (
      <ViewContainer>
        <StatusBarBg />
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
