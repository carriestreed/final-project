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
      .then((response) => {
        console.log(response);

        const headersObj = response.headers.map;
        const accessTokenPair = ['accessToken', headersObj['access-token'][0]];
        const clientPair = ['client', headersObj.client[0]];
        const uidPair = ['uid', headersObj.uid[0]];
        console.log(accessTokenPair, clientPair, uidPair);

        AsyncStorage.multiSet([accessTokenPair, clientPair, uidPair], _ => {
          console.log('successfully added to storage');
        })

        return response.json();
      })
      .then((responseData) => {
        afterSignupFxn(true);
      })
      .catch((error) => {
        console.warn('ERROR', error);
        afterSignupFxn(false);
      })
    }

}

export default auth;
