`use strict`

import React, {
  requireNativeComponent,
  Component,
  MapView,
  StyleSheet
} from 'react-native';


class MapViewComponent extends Component{

  render(){
    var region = {
         latitude: 35.6895,
         longitude: 139.6917,
         latitudeDelta: 0.004,
         longitudeDelta: 0.004
       };

       var markers = [
         {
           latitude: 35.6895,
           longitude: 139.6917,
         }
       ];

    return(
      <MapView
         region={region}
         style={styles.mainContainer}
         annotations={markers}
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
