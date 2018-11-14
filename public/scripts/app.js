window.addEventListener('load', function() {
  var loginBtn = document.getElementById('button');

  var webAuth = new auth0.WebAuth({
    domain: 'pwa-auth.auth0.com',
    clientID: 'jn1MfRpp07p0v1sqMpb6Ok4y7uCNsiR6',
    responseType: 'token id_token',
    scope: 'openid',
    redirectUri: 'https://zippity-check-in.firebaseapp.com/checkin.html'
  });

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
    console.log('click')
  });

  (function() {
    'use strict';

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service-worker.js')
               .then(function() { console.log('Service Worker Registered'); });
    }
  });

});




