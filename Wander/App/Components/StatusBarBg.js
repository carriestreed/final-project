'use strict'

import React, {
  View,
  Text,
  Image,
  Component,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

class StatusBarBg extends Component {
  render(){
    return (
      <View style={styles.main}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    height: 20,
    backgroundColor: 'transparent',
  }
});


export default StatusBarBg;
