'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import ViewContainer from '../components/ViewContainer';


class PhotoFeedScreen extends Component {

  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      photoDataSource: ds.cloneWithRows(photo)
    }
  }

  componentDidMount(){
    console.log('HELLO from the photo feed screen!!!');
    console.log('NAV PROPS are', this.props.navigator);
    console.log('SEARCHING for ', this.props.countrySearch);
  }

  renderPhotoRow(photoData){
    return (
      <View style={styles.personRow}>
        <Image
          source={{uri:photoData.url}}
          >
          <Text style={styles.personText}>
            {photoData.description}
          </Text>
        </Image>
      </View>

    )
  }

  render(){
    return (
      <ViewContainer>
        <StatusBarBg />
        <ListView
          dataSource={this.state.photoDataSource}
          renderRow={(photoData) => {return this.renderPhotoRow(photoData)}}
        />
      </ViewContainer>
    )
  }
}


const photo = [
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
  },
  {
    id: 2,
    url: "http://blog.iamnikon.com/en_GB/wp-content/uploads/SCOTT-A-WOODWARD_1SW1943.jpg",
    title: "Salt Flats",
    description: "Dolly the Sheep flip flops Fresh Prince of Bel-Air sideburns gangsta’s paradise, Air Jordans cargo pants Geo Metro incididunt Oakleys. Michael Jordan Spice Girls animated GIFs Sublime frosted tips gettin’ jiggy wit it. Choker necklace Nirvana laborum Kazaa Saved by the Bell. As I lay me down to sleep Roseanne Hush Puppies nylon windbreaker Tommy Hilfiger duis.",
    author: "Eustace",
    date: "April 9",
    location: "Bolivia",
    created_at: "2016-05-01T20:46:15.497Z",
    updated_at: "2016-05-01T20:46:15.497Z"
  },
  {
    id: 3,
    url: "http://blog.topazlabs.com/wp-content/uploads/2014/04/scott_stulberg_13.jpg",
    title: "Salt Flats",
    description: "Bel-Air sideburns gangsta’s paradise, Air Jordans cargo pants Geo Metro incididunt Oakleys. Michael Jordan Spice Girls animated GIFs Sublime frosted tips gettin’ jiggy wit it. Choker necklace Nirvana laborum Kazaa Saved by the Bell. As I lay me down to sleep Roseanne Hush Puppies nylon windbreaker Tommy Hilfiger duis.",
    author: "Eustace",
    date: "April 9",
    location: "Bolivia",
    created_at: "2016-05-01T20:46:15.497Z",
    updated_at: "2016-05-01T20:46:15.497Z"
  },
  {
    id: 4,
    url: "http://www.expatliving.sg/incoming/article59374.ece/alternates/w1024/_MG_3110.jpg",
    title: "Salt Flats",
    description: "Truman Show. Dolly the Sheep flip flops Fresh Prince of Bel-Air sideburns gangsta’s paradise, Air Jordans cargo pants Geo Metro incididunt Oakleys. Michael Jordan Spice Girls animated GIFs Sublime frosted tips gettin’ jiggy wit it. Choker necklace Nirvana laborum Kazaa Saved by the Bell. As I lay me down to sleep Roseanne Hush Puppies nylon windbreaker Tommy Hilfiger duis.",
    author: "Eustace",
    date: "April 9",
    location: "Bolivia",
    created_at: "2016-05-01T20:46:15.497Z",
    updated_at: "2016-05-01T20:46:15.497Z"
  },
]



const styles=StyleSheet.create({
  searchBgImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  personRow: {
    flexDirection: 'column',
  },
  personText: {
    fontSize: 20,
  }
});

export default PhotoFeedScreen;
