'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import SearchBar from 'react-native-search-bar';
import PhotoFeedScreen from '../screens/PhotoFeedScreen';
import ViewContainer from './ViewContainer';
import ajaxHelpers from '../utils/ajaxHelpers';



class SearchBarComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      ajaxReturn: [],
      countrySearch: this.props.countrySearch,
    }
  }

  userInputAjaxCall(){
    console.log('sending ajax call from search btn')
    let userInput = this.state.countrySearch;
    ajaxHelpers.callCountry(userInput)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        countrySearch: responseData
      })
      console.log('response data', responseData)
    })
    .done();
  }

  handleChange(event){
    this.setState({
      countrySearch: event.nativeEvent.text
    });
  }

  onPress(e) {
    console.log('press', e)
  }

  searchBar(){
    return(
      <SearchBar
        ref='searchBar'
        placeholder='Enter a destination'
        style={styles.search}
        onChange={this.handleChange.bind(this)}
        onPress={this.userInputAjaxCall.bind(this)}
        hideBackground={true}
        enablesReturnKeyAutomatically={true}
        showsCancelButton={true}
      />
    )
  }

  render(){
    return (
      <ViewContainer>
        <StatusBarBg />
        <View>
          {this.searchBar()}
        </View>
        <PhotoFeedScreen
          countrySearch={this.state.countrySearch}
          />
      </ViewContainer>
    )
  }
}


const styles=StyleSheet.create({
  search: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SearchBarComponent;
