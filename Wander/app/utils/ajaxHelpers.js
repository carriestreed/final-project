'use strict'

import API_KEY from './keys.js'

const ajaxHelpers = {

  callCountry: function(userInput){
    return fetch('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=' + API_KEY + '&sort=interestingness-desc&group_id=13197975%40N00&has_geo=&tags=' + userInput, {'method': 'GET'})
  }
}

export default ajaxHelpers;
