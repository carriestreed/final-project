'use strict'

import React, {
  Component,
  View,
  Text,
  ListView,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import ViewContainer from '../components/ViewContainer';


const testData = [
  {
    id: 1,
    url: "https://www.newscientist.com/blogs/shortsharpscience/assets_c/2011/06/00130493-thumb-600x400-128963.jpg",
    title: "Salt Flats",
    description: "Trippin screening phone calls parting your hair down the middle the Truman Show. Dolly the Sheep flip flops Fresh Prince of Bel-Air sideburns gangsta’s paradise, Air Jordans cargo pants Geo Metro incididunt Oakleys. Michael Jordan Spice Girls animated GIFs Sublime frosted tips gettin’ jiggy wit it. Choker necklace Nirvana laborum Kazaa Saved by the Bell. As I lay me down to sleep Roseanne Hush Puppies nylon windbreaker Tommy Hilfiger duis.",
    author: "Eustace",
    date: "April 9",
    location: "Bolivia",
    created_at: "2016-05-01T20:46:15.497Z",
    updated_at: "2016-05-01T20:46:15.497Z"
  }
]


class PhotoFeedScreen extends Component {

  constructor(props){
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      photoDataSource: ds.cloneWithRows(testData)
    }
  }

  render(){
    return (
      <ViewContainer>
        <StatusBarBg />
        <Text>{`Hi, I'm the photo feed screen`}</Text>
      </ViewContainer>
    )
  }
}


export default PhotoFeedScreen;
