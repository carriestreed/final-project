'use strict'

import React, {
  AsyncStorage,
} from 'react-native';

import ajaxHelpers from './ajaxHelpers';


const auth  = {

  register(email, password, password_confirmation, afterSignupFxn) {

    let response = fetch(ajaxHelpers.baseUrl + '/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      })
    })
    .then(function (response) {
      console.log('please be successful', response);



      // on success, store tokens in async storage
      // and run callback

      AsyncStorage.setItem('uid', response.header.uid)
        .getItem('uid')

      AsyncStorage.setItem('access-token', response.header['access-token'])
        .getItem('access-token')

      AsyncStorage.setItem('client', response.header.client)
        .getItem('client')

      if (afterSignupFxn) {
        afterSignupFxn(true)
      }
    })
    .catch(function (response) {
      // failed login
      console.log('There was an error:', response.data.errors);
      if (afterSignupFxn) {
        afterSignupFxn(false);
        }
    });
  }
}

export default auth;
