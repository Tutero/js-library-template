var chai = chai || (require && require('chai')),
    expect = chai.expect,
    myModule = myModule || (require && require('../myModule.js'));
describe('myModule', function () {
    describe('echo', function () {
        it('should return the value of it\'s first parameter', function () {
            var result = myModule.echo('test');
            expect(result).to.equal('test');
        });
    });
});
