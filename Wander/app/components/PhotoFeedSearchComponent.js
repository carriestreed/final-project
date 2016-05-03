'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';

class PhotoFeedSearchComponent extends Component {
  render(){
    return (
      <View style={styles.mainContainer}>
        <Text> {`Yo I'm going to be a search bar`}</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
  }
})

export default PhotoFeedSearchComponent;
