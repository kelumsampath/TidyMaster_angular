const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 9000;

http.createServer(app).listen(port,(err)=>{
  if (err) {
    console.error(err);
  } else {
    console.log("App listen to port:"+port);
  }
});


app.use(express.static(path.join(__dirname+"./../html")));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + './../html/index.html'));
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());





app.get('/abc',(req,res)=>{
  res.send("Hello food!!");
});


