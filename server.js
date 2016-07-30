var express = require("express");
// var path = require("path");
// var moment = require("moment");
var app = express();

app.get('/', function (req, res) {
    
    var ip = req.headers['x-forwarded-for'];
    
    var language = req.headers['accept-language'];
    var substringIndex = language.indexOf(",");
    language = language.substring(0, substringIndex);
    
    var software = req.headers['user-agent'];
    substringIndex = software.indexOf("(");
    var substringIndex2 = software.indexOf(")");
    software = software.substring(substringIndex, substringIndex2);
    
    var result = {ipaddress: ip, language: language, software: software};
    res.writeHead(200, { 'Content-Type': 'application/json'});
  	res.end(JSON.stringify(result)); 
  
});


app.listen(process.env.PORT || 8080 || 5000);