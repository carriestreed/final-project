`use strict`

import React, {
  requireNativeComponent,
  Component,
  MapView,
  StyleSheet
} from 'react-native';


class MapViewComponent extends Component{

  componentWillMount(){
    console.log(this.props.title)
    }

  constructor(props){
    super(props)
    this.state = {
      lat: '',
      lon: '',
    }
  }

  render(){
    var region = {
     latitude: this.state.lat,
     longitude: this.state.lon,
     latitudeDelta: 0.004,
     longitudeDelta: 0.004
   };

   var markers = [
     {
      latitude: this.state.lat,
      longitude: this.state.lon,
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
