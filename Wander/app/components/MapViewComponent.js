`use strict`

import React, {
  requireNativeComponent,
  Component,
  MapView,
  StyleSheet
} from 'react-native';


class MapViewComponent extends Component{

  render(){
    return(
      <MapView
        style = {styles.mainContainer}
        initialRegion={{
          latitude: 33.9628,
          longitude: 18.4098,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 600,
    width: 414,
    marginTop: 20,

  }
})



export default MapViewComponent;
