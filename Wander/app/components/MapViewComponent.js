`use strict`

import React, {
  requireNativeComponent,
  Component,
  MapView
} from 'react-native';


class MapViewComponent extends Component{

  render(){
    return(
      <MapView
        style = { { height: 700, width: 414 } }
        initialRegion={{
          latitude: 33.9628,
          longitude: 18.4098,
        }}
      />
    )
  }
}



export default MapViewComponent;
