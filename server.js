const express = require("express");
const app = express();
let port = process.env.PORT || 8080;

const connectSrc = defineConnectSrc();

var options = {
  setHeaders: function (res, path, stat) {
    res.set("Content-Security-Policy", 
    "default-src 'self'; " +
    "script-src 'self' https://apis.google.com; "+
    "style-src 'self' 'unsafe-inline'; "+
    "frame-src 'self' https://accounts.google.com/; " + 
    "connect-src 'self' " + connectSrc)
  }
}

app.use(express.static('./dist/cool-page-ui', options));
console.log('connect src url set to : ' , connectSrc);

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: './dist/cool-page-ui/'});
});

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
});

/*
TODO Kopple die Backend Url ans environment von angular
 */
function defineConnectSrc() {
  if(process.env.IS_LOCAL) {
    return 'http://localhost:5000';
  }
  return 'https://cool-page.herokuapp.com';
}
