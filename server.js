const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Then use it before your routes are set up:
app.use(cors());

const routes = require('./routes/routes.js')(app, fs);

// const server = app.listen(3001, () => {
//     console.log('listening on port %s...', server.address().port);
// });

// Create a Server
var server = app.listen(8080, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("App listening at http://%s:%s", host, port)
  })
