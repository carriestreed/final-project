'use strict'

import React, {
  AsyncStorage,
} from 'react-native';

import ajaxHelpers from './ajaxHelpers';


const auth  = {

  register(email, password, password_confirmation, afterSignupFxn) {
    console.log('in signup auth');
    console.log(email);
    console.log(password);
    console.log(password_confirmation);
    console.log(afterSignupFxn);

    fetch(ajaxHelpers.register, {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    })
    .then(function (response) {
      console.log(response);
      // we successfully signed up. store the tokens in local storage and run the callback
      // AsyncStorage.uid = response.headers.uid;
      // AsyncStorage.accessToken = response.headers['access-token'];
      // AsyncStorage.client = response.headers.client;

      // AsyncStorage.setItem('uid', response.header.uid)
      //   .getItem('uid')
      //
      // AsyncStorage.setItem('access-token', response.header['access-token'])
      //   .getItem('access-token')
      //
      // AsyncStorage.setItem('client', response.header.client)
      //   .getItem('client')
      //
      //
      // if (afterSignupFxn) {
      //   afterSignupFxn(true)
      // }
    // })
    // .catch(function (response) {
    //   // we failed to login
    //   console.log('There was an error:', response.data.errors);
    //   if (afterSignupFxn) {
    //     afterSignupFxn(false);
    //   }
    });
  }
}

export default auth;
