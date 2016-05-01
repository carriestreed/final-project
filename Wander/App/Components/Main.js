import React, {
  View,
  Text,
  Image,
  Component,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginTop: 64,
    },
    bgImage: {
      flex: 1,
      width: null,
      height: null,
      backgroundColor: 'transparent',
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textShadowColor: '#000',
      textAlign: 'center',
      color: '#fff'
    },
    formContainer: {
      margin: 20,
    },
    searchInput: {
      height: 50,
      padding: 10,
      margin: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 6,
      color: '#fff'
    },
    btnText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    submitBtn: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'rgba(255,255,255,.5)',
      borderColor: 'rgba(255,255,255,.3)',
      borderWidth: 1,
      borderRadius: 6,
      marginTop: 10,
      margin: 4,
      justifyContent: 'center'
    },
 });

class Main extends Component {

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
      <View style={styles.mainContainer}>
        <Image
          source={require('../images/bolivia.jpg')}
          style={styles.bgImage} >
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
      </View>
    )
  }
}

export default Main;
