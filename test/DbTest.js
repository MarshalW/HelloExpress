/**
 * Created with JetBrains WebStorm.
 * User: marshal
 * Date: 12-5-17
 * Time: 下午8:23
 * To change this template use File | Settings | File Templates.
 */

require('should');
var DocProvider = require('../lib/db/DocProvider').DocProvider;

var bookProvider = new DocProvider('books');

describe('DocProvider', function () {
    var book = {
        name:'钱的历史'
    };

    describe('#insert', function () {
        bookProvider.insert(book, {}, function (result) {
            it('图书应该有_id属性', function () {
                result[0].should.have.property('_id');
            });

            describe('#findOne', function () {
                it('读取的图书应该和插入的对象一致', function (done) {
                    bookProvider.findOne({_id:book._id}, {}, function (result) {
                        result.should.eql(book);
                        done();
                    });
                });
            });
        });
    });
});
