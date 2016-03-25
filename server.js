var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
});

require('./models/product');
require('./routes')(app);

app.listen(8888);
console.log('Listening on port 8888...');