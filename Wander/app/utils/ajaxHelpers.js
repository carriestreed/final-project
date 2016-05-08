'use strict'

import API_KEY from './keys.js';

const ajaxHelpers = {

  baseUrl: 'http://localhost:3000',

  callCountry: function(userInput){
    return fetch('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=' + API_KEY + '&sort=date-posted-desc&group_id=13197975%40N00&has_geo=1&tags=' + userInput, {'method': 'GET'})
  },

  callFeatured: function(){
    return fetch('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=' + API_KEY + '&sort=interestingness-desc&group_id=13197975%40N00&has_geo=1', {'method': 'GET'})
  },

  getPhotoInfo: function(photoId){
    return fetch('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.getInfo&api_key=' + API_KEY + '&photo_id=' + photoId, {'method': 'GET'})
  },

  register: function(user){
    return fetch('http://localhost:3000/auth.json', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  },

  login: function(user) {
    console.log('hitting login fxn in ajaxhelpers', user);
    return fetch('http://localhost:3000/auth/sign_in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  },

}

export default ajaxHelpers;
