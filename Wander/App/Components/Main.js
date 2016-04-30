import React, {
  View,
  Text,
  Component,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
});

class Main extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> Testing the Router </Text>
      </View>
    )
  }
}

export default Main;
