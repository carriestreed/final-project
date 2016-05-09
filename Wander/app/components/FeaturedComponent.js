'use strict'

import React, {
  Component,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Navigator,
} from 'react-native';

import ajaxHelpers from '../utils/ajaxHelpers';

class FeaturedComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      ajaxReturn: [],
      countrySearch: '',
    }
  }

  userPress1(){
    this.setState({
      countrySearch: 'indonesia'
    })
    this.handleAjaxCall()
  }

  userPress2(){
    this.setState({
      countrySearch: 'nikko'
    })
    this.handleAjaxCall()
  }

  userPress3(){
    this.setState({
      countrySearch: 'cape+town'
    })
    this.handleAjaxCall()
  }

  handleAjaxCall(){
    console.log('searching for', this.state.countrySearch)
    let userInput = this.state.countrySearch;
    ajaxHelpers.callCountry(userInput)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        ajaxReturn: responseData
      })
      this.navigateToPhotoFeedScreen()
    })
    .done();
  }

  navigateToPhotoFeedScreen(){
    this.setState({
      isLoading: true,
    });
    this.props.navigator.push({
      goToScreen: 'PhotoFeedScreen',
      countrySearch: this.state.ajaxReturn,
      sceneConfig: Navigator.SceneConfigs.FloatFromRight,
    });
  }

  render(){
    return(
      <View>

        <Text style={styles.featured}>
          {`Featured Destinations`}
        </Text>

        <TouchableOpacity
          onPress={this.userPress1.bind(this)}
          >
          <Image
            style={styles.main}
            source={require('../images/indonesia.jpg')}
            >
            <Text style={styles.text}>{`Indonesia`}</Text>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.userPress2.bind(this)}
          >
          <Image
            style={styles.main}
            source={require('../images/nikko.jpg')}
            >
            <Text style={styles.text}>{`Japan`}</Text>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.userPress3.bind(this)}
          >
          <Image
            style={styles.main}
            source={require('../images/capetown2.jpg')}
            >
            <Text style={styles.text}>{`South Africa`}</Text>
          </Image>
        </TouchableOpacity>

      </View>

    )
  }
}


const styles=StyleSheet.create({
  main: {
    backgroundColor: 'transparent',
    width: null,
    height: 230,
    resizeMode: 'cover',
    marginTop: 10
  },
  featured: {
    fontSize: 25,
    fontFamily: 'NewsCycle-Bold',
    marginTop: 25,
    margin: 5,
    marginBottom: -10,
    color: 'rgba(147, 147, 147, 0.9)',
  },
  text: {
    margin: 5,
    marginRight: 10,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    fontFamily: 'NewsCycle-Bold',
    fontSize: 25,
    textShadowColor: 'rgba(0,0,0,.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    marginBottom: 100,
    textAlign: 'center',
    color: 'rgba(255,255,255,.9)',
  },
});


export default FeaturedComponent;
