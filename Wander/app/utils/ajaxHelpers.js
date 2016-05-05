'use strict'

import API_KEY from './keys.js';

const baseUrl = 'http://localhost:3000';

const ajaxHelpers = {

  callCountry: function(userInput){
    return fetch('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=' + API_KEY + '&sort=interestingness-desc&group_id=13197975%40N00&has_geo=1&tags=' + userInput, {'method': 'GET'})
  },

  getPhotoInfo: function(photoId){
    return fetch('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.getInfo&api_key=' + API_KEY + '&photo_id=' + photoId, {'method': 'GET'})
  },

  register: function(userInfo){
    console.log('hitting register fxn in ajaxhelpers with', userInfo);
    return fetch(baseUrl + '/auth', {'method':'POST'})
  },

  signIn: function(afterAjaxFxn) {
    console.log('hitting sign in fxn in ajaxhelpers');
  },

}

export default ajaxHelpers;
