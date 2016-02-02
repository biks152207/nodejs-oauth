var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var oauth2= require('simple-oauth2')({
  clientID: '0ace8ccd32b9e39ec049',
  clientSecret:'dd114d7e209f894ab272e9ba4ec321a07575ab30',
  site: 'https://github.com/login',
  tokenPath: '/oauth/access_token'
});

var authorization_uri = oauth2.authCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/callback',
  scope: 'notifications',
  state: '3(#0/!~'
});

app.get('/auth', function(req, res){
  res.redirect(authorization_uri);
});

app.get('/callback', function(req, res){
  var code = req.query.code
  console.log(code);

})

app.get('/', function (req, res) {
  res.send('Hello<br><a href="/auth">Log in with Github</a>');
});

app.listen(3000);

console.log('Express server started on port 3000');