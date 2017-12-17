import { urlencoded, json } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/express';

var express = require;

const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
app.bodyParser(urlencoded({ bodyParser }));

app.use(bodyParser / json());
//app headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    req.setHeader('Access-Control-Allow-Origin', 'Get', 'POST', 'OPTION', 'PUT', 'DELETE', 'PATCH');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/getEmpData',(req,res,) => {
    fs.readFile('./src/assets/my_json_file.json','utf8',function(err,data){
        if(err){
            return console.log(err);
        }
        else{
            res.json({data:data,code="success",Headers:"Access-Control-Allow-Origin:*",})
        }
    });
});