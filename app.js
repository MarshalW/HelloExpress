/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , util = require('util')
    , DocProvider = require('./lib/db/DocProvider').DocProvider;

var app = module.exports = express.createServer();

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/hello/say', routes.hello.say);

app.listen(3001, function () {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

var book={name:'枪炮、病毒和钢铁'};
var docProvider=new DocProvider('books');
//docProvider.insert(book,{},function(result){
//    console.log('insert ok.');
//
//    docProvider.findOne({_id:book._id},{},function(result){
//        console.log('find one ok:'+result.name);
//    });
//});

docProvider.findOne({name:'钱的历史'}, {}, function (result) {
    console.log('find one ok:' + result.name);
});