const express = require('express');
const router = express.Router();

var request = require('request');

router.get('/', async (req,res) => {

    var client_id = '629ae71881f44dbb86b08fe751cc5d0f';
    var client_secret = 'd4827318c5984c60ba06cfe355540d0c';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    res.json(token);
  }
});
   
   
});


module.exports = router;