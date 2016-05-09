'use strict'

import React, {
  Component,
  MapView,
  StyleSheet
} from 'react-native';


class MapViewComponent extends Component{

  render(){
    let region = {
     latitude: this.props.lat,
     longitude: this.props.lon,
     latitudeDelta: 0.200,
     longitudeDelta: 0.200
   };

    let markers = [
     {
      latitude: this.props.lat,
      longitude: this.props.lon,
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
