'use strict'

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import StatusBarBg from '../components/StatusBarBg';
import ViewContainer from '../components/ViewContainer';

class RegisterScreen extends Component {
  render(){
    return(
      <ViewContainer styles={styles.main}>
        <StatusBarBg />
        <Text>{`Hi from Register Screen`}</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1
  }
})

export default RegisterScreen;
