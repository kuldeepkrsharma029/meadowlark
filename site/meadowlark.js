var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();

//Set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//Adding a middleware to serve the static content to client without question
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about', {fortune: fortune.getFortune()});
});

app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack)
    res.type('text/plain');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express sever is started on http://localhost:'+ app.get('port') + '; Press Ctrl+c to stop the same!');
});