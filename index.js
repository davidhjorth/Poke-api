const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url,{
    "method": "GET",
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

app.get('/', function(req, res) {
    return res.send('lol');
});

app.listen(5501, function(){
    console.log("Hello");
});

// https.get(url, res => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     console.log(body);
//   });
// });