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

class HomepageSearchComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      countryName: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event){
    this.setState({
      countryName: event.nativeEvent.text
    });
  }

  handleSubmit(){
    this.setState({
      isLoading: true
    });
    console.log('searching for', this.state.countryName)
  }

  render(){
    return (
      <Image
        source={require('../images/antelopecanyon.jpg')}
        style={styles.searchBgImage} >

        <View style={styles.formContainer}>
          <Text style={styles.title}>
            Picture yourself, everywhere.
          </Text>
          <TextInput
            placeholder='Enter A Country'
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
          />
          <TouchableHighlight
            style={styles.submitBtn}
            onPress={this.handleSubmit.bind(this)}
            underlayColor='#fff'>
            <Text style={styles.btnText}>
              Go
            </Text>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }
}

const styles=StyleSheet.create({
  temp: {
    backgroundColor: 'transparent',
  },
  mainContainer: {
    backgroundColor: '#fff',
  },
  statusBg: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  searchBgImage: {
    flex: 1,
    width: null,
    height: 650,
    resizeMode: 'cover',
  },
  textStyle: {
    flex:1,
    fontSize: 20,
  },
});


export default HomepageSearchComponent;
