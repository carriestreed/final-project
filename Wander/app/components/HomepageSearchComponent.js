'use strict'

import React, {
  Component,
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import ajaxHelpers from '../utils/ajaxHelpers';


class HomepageSearchComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      ajaxReturn: [],
      countrySearch: 'Indonesia',
      isLoading: false,
      error: false
    }
  }

  handleChange(event){
    this.setState({
      countrySearch: event.nativeEvent.text
    });
  }

  userInputAjaxCall(){
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
    });
  }

  render(){
    return (
      <Image
        source={require('../images/antelopecanyon.jpg')}
        style={styles.searchBgImage} >

        <View style={styles.formContainer}>
          <Text style={styles.title}>
            {`Picture yourself, everywhere.`}
          </Text>

          <TextInput
            placeholder='enter a destination'
            placeholderTextColor='rgba(255,255,255,.7)'
            style={styles.searchInput}
            value={this.state.countrySearch}
            onChange={this.handleChange.bind(this)}
          />

          <TouchableHighlight
            style={styles.submitBtn}
            onPress={this.userInputAjaxCall.bind(this)}
            underlayColor='rgba(153, 184, 51, 0.9)'>
            <Text style={styles.btnText}>
              {`Take me there`}
            </Text>
          </TouchableHighlight>

        </View>
      </Image>
    )
  }
}

const styles=StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
  },
  statusBg: {
    backgroundColor: '#fff',
  },
  searchBgImage: {
    flex: 1,
    width: null,
    height: 650,
    resizeMode: 'cover',
  },
  formContainer: {
    margin: 20,
    marginTop: 120,
    borderRadius: 4,
    padding: 10,
  },
  title: {
    fontFamily: 'NewsCycle-Bold',
    fontSize: 30,
    textShadowColor: 'rgba(0,0,0,1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    color: 'white',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  searchInput: {
    fontFamily: 'NewsCycle-Bold',
    fontSize: 25,
    height: 50,
    padding: 10,
    margin: 5,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(255,255,255,.7)',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    color: 'rgba(255,255,255,.9)',
    textAlign: 'center',
  },
  textStyle: {
    flex:1,
    fontSize: 20,
  },
  btnText: {
    fontFamily: 'NewsCycle-Bold',
    fontSize: 25,
    color: 'rgba(255, 255, 255, .9)',
    alignSelf: 'center'
  },
  submitBtn: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'rgba(116, 138, 42, 0.9)',
    borderColor: 'rgba(0,0,0,.1)',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    margin: 4,
    justifyContent: 'center'
  },
});


export default HomepageSearchComponent;
