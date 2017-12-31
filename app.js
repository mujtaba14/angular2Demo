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
  console.log("req.body=====>", req.body);
  if (req.body) {
    var configFile = fs.readFileSync('./src/assets/my_json_file.json','utf8');
    var config = JSON.parse(configFile);
    config.push(req.body);
    var configJSON = JSON.stringify(config);
    fs.writeFileSync('./src/assets/my_json_file.json', configJSON,'utf8', function (err) {
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

app.post('/removeData', function (req, res) {
  console.log("request.body------>",req.body);
  if (req.body) {
    var configFile = fs.readFileSync('./src/assets/my_json_file.json','utf8');
    var config = JSON.parse(configFile);
    // config.pop(req.body.i);
    config.splice(req.body.i, 1);
    console.log("index data========>", req.body.i)
    var configJSON = JSON.stringify(config);
    fs.writeFileSync('./src/assets/my_json_file.json','utf8', configJSON, function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("deleted record successfully");
        res.json({ code: 201, message: "success" });
      }
    });

  }
})

app.post('/updateEmp', function (req, res) {
  //console.log(req.body)
  if (req.body) {
    var configFile = fs.readFileSync('./src/assets/my_json_file.json');
    var config = JSON.parse(configFile);
    let index = config.map(obj => obj.name).indexOf(req.body.name);
    if (index > -1 && req.body.index !== index) {
      res.json({ message: "name should be unique", code: "error", Headers: "Access-Control-Allow-Origin: *" })
    } else {
      // config.splice(req.body.index, 1);
      //config.push(req.body);
      config[req.body.index]  =  req.body;
      var configJSON = JSON.stringify(config);
      fs.writeFileSync('./src/assets/my_json_file.json', configJSON, function (err) {
        if (err) {
          return console.log(err);
        } else {
          res.json({ code: 201, message: "success" });
        }
      });
    }
  }
})

  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
  console.log("inside");
})
app.get('/deleteEmp/:index', function (req, res) {
  console.log("called deleteEmp", req.param.index);
})
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });