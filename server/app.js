'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var mongoose = require('mongoose');

var TranslateMicrosoft = require('./translate_microsoft');



// start mongoose
mongoose.connect('mongodb://localhost/sit');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

	/* test schema */
    var testSchema = new mongoose.Schema({
        test: String
    });

    var Test = mongoose.model( 'test', testSchema );

	var app = express();

	app.configure(function(){
	    app.set('port', 9000);

	    app.set('view engine', 'handlebars');
	    app.set('views', __dirname + '../app/scripts/views');
	});


	// simple log
	app.use(function(req, res, next){
	  console.log('%s %s', req.method, req.url);
	  next();
	});

	// mount static
	app.use(express.static( path.join( __dirname, '../app') ));
	app.use(express.static( path.join( __dirname, '../.tmp') ));
	// app.use(express.static('/bootstrap', path.join( __dirname, '../app/bower_components/bootstrap/dist') ));


	// route index.html
	app.get('/', function(req, res){
	  res.sendfile( path.join( __dirname, '../app/index.html' ) );
	});

	// route API
	app.get('/api/translate/:text/:lang1/:lang2', function(req, res){

		if(req.params){
			console.log('received with GET: ', req.params);
		}

		var text = req.params.text;
		var lang1 = req.params.lang1;
		var lang2 = req.params.lang2;

		var translateMicrosoft = new TranslateMicrosoft();
		
		translateMicrosoft.getAccessToken()
		.then(function(accessToken) {
			
			translateMicrosoft.translate(accessToken, text, lang1, lang2)
			.then(function(result) {
				
				// parse result to remove the XML part
				//'<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/">I\'m going to the fair</string>'
				var partialResult = result.substring(result.indexOf('>')+1);
				var finalResult = partialResult.substring(0,partialResult.indexOf('<'))

				res.send(finalResult);
			});

		});
		
	});

	// start server
	http.createServer(app).listen(app.get('port'), function(){
	    console.log('Express App started!');
	});
});


