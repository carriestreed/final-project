`use strict`

import React, {
  requireNativeComponent,
  Component,
  MapView,
  StyleSheet
} from 'react-native';


class MapViewComponent extends Component{

  componentDidMount(){
    console.log('in map view', this.props.lat)
    console.log('in map view', this.props.lon)
    }

  constructor(props){
    super(props)
    this.state = {
      lat: this.props.lat,
      lon: this.props.lon
    }
  }

  render(){
    let region = {
     latitude: this.props.lat,
     longitude: this.props.lon,
     latitudeDelta: 0.024,
     longitudeDelta: 0.024
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
