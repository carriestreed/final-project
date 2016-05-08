'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import SearchBar from 'react-native-search-bar';


class SearchBarComponent extends Component {

  onChange(e) {
    console.log('change', e)
  }

  onPress(e) {
    console.log('press', e)
  }

  render(){
    return (
      <SearchBar
        ref='searchBar'
        placeholder='Search'
        onChange={this.onChange.bind(this)}
        onPress={this.onPress.bind(this)}
      />
    )
  }
}

const styles=StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SearchBarComponent;
