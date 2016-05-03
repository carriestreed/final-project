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


const hpFeaturedData = [
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

const test = [
  {firstName: 'carrie', lastname: 'streed', id: 1342 },
  {firstName: 'josh', lastname: 'dixon', id: 123423 },
  {firstName: 'krissy', lastname: 'streed', id: 12564 },
  {firstName: 'desirae', lastname: 'chavez', id: 13456235 },
  {firstName: 'laura', lastname: 'rico', id: 15234575 },
]



class PhotoFeedScreen extends Component {

  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      testDataSource: ds.cloneWithRows(test)
    }
  }

  componentDidMount(){
    console.log('HELLO from the photo feed screen!!!');
    console.log('NAV PROPS are', this.props.navigator);
    console.log('SEARCHING for ', this.props.countrySearch);
  }

  renderPhotoRow(testData){
    return (
      <View style={styles.personRow}>
        <Image
          source={require('../images/bolivia.jpg')}
        >
        <Text style={styles.personText}>
          {testData.firstName}
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
          dataSource={this.state.testDataSource}
          renderRow={(testData) => {return this.renderPhotoRow(testData)}}
        />
      </ViewContainer>
    )
  }
}

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
