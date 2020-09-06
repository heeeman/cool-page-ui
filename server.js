const express = require("express");
const app = express();
let port = process.env.PORT || 8080;
app.use(express.static('./dist/cool-page-ui'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: './dist/cool-page-ui/'});
  console.log(' request received : ' , req)
});
app.listen(port, () => {
                                       console.log(`Example app is listening on port http://localhost:${port}`);
                                   }

);

