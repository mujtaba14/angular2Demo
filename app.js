var express = require('express');

const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
//var db = require('./db');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/getEmpData', (req, res) => {
  fs.readFile('./src/assets/my_json_file.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    } else {
      res.json({ data: data, code: "success", Headers: "Access-Control-Allow-Origin: *" })
    }
  });
})

app.post('/addEmpData', function (req, res) {
  //console.log("req.body=====>", req.body);
  if (req.body) {
    //var configFile = fs.readFileSync('./src/assets/my_json_file.json', 'utf8');
    var configFile = fs.readFileSync( './src/assets/my_json_file.json', function(err, data) { console.log( data.toString() ); });
    console.log("config file=====>", configFile);
    var config = JSON.parse(configFile);
    config.push(req.body);
    var configJSON = JSON.stringify(config);
    fs.writeFileSync('./src/assets/my_json_file.json',configFile.join(','),'utf8', configJSON, function (err) {
      if (err) {
        console.log("inside error");
        res.json({ code: 400, message: "error" });
      } else {
        console.log("saved data");
        res.json({ code: 200, message: "success" });
      }
    });

  }
})

  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
  console.log("inside");
})
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });