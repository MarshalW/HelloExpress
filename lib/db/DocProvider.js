/**
 * Created with JetBrains WebStorm.
 * User: marshal
 * Date: 12-5-16
 * Time: 下午9:14
 * To change this template use File | Settings | File Templates.
 */
var Db = require('mongodb').Db,
    Server = require('mongodb').Server
Config = require('./Config').Config;

var DocProvider = function (collectionName) {
    this.collectionName = collectionName;
};

DocProvider.prototype.db = new Db(Config.dbName,
    new Server(Config.host, Config.port, {auto_reconnect:true}, {}));

DocProvider.prototype.getCollection = function (callback) {
    this.db.collection(this.collectionName, function (err, collection) {
        if (err) throw err;
        callback(collection);
    });
};

DocProvider.prototype.insert=function(docs, options, callback){
    this.getCollection(function (collection) {
        collection.insert(docs,options,function(err,result){
            if(err) throw err;
            callback(result);
        });
    });
};

exports.DocProvider=DocProvider;