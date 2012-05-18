/**
 * Created with JetBrains WebStorm.
 * User: marshal
 * Date: 12-5-18
 * Time: 下午2:05
 * To change this template use File | Settings | File Templates.
 */
require('should');

var book = {name:"枪炮、病毒和钢铁"};

describe('Book', function () {
    it('图书应该应该一致', function () {
        var newBook={name:"枪炮、病毒和钢铁"};
        newBook.should.eql(book);
    });
});