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
        <Text> {`Yo I'm going to be an IOS Native searchbar`} </Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default PhotoFeedSearchComponent;
