var express = require('express');
var app = express.createServer();

console.log('Server running');

app.configure('development', function(){
    
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    
    app.get('/', function(req, res){
        res.render('index.jade', { title: 'ClarkyCat' });
    });
    
    app.use(express.static(__dirname + '/public'));
    
});

app.listen(process.env.C9_PORT);