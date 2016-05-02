'use strict'

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';

class StatusBarBg extends Component {
  render(){
    return (
      <View style={[styles.main, this.props.style || {}]}>
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
