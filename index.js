var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    //ParseServer = require('parse-server').ParseServer,
    
    port = process.env.PORT || 9001,
       
    Secrets = require('./Secrets/secrets.js');



app.use(cors(), bodyParser.json(), express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, () => {
  console.log('parse-server-example running on port ' + port + '.');
});


mongoose.connect('mongodb://127.0.0.1:27017/jinterview');
mongoose.connection.once('connected', () => {
    console.log("db connected");
})