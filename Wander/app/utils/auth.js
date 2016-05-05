'use strict'

import React, {
  AsyncStorage,
} from 'react-native';

import ajaxHelpers from './ajaxHelpers';


const auth  = {

  register(email, password, password_confirmation, afterSignupFxn) {

    let user = {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    ajaxHelpers.register(user)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('this is responseData', responseData);
      })
      .catch((error) => {
        console.warn('ERROR', error);
      })
      .done();
    }

}

export default auth;
