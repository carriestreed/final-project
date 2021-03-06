'use strict'

import React, {
  View,
  Component,
} from 'react-native'

class ViewContainer extends Component {
  render(){
    return (
      <View style={[styles.viewContainer, this.props.style || {}]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = React.StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
});


export default ViewContainer;
