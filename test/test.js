var expect = chai.expect;
describe('myModule', function () {
    describe('echo', function () {
        it('should return the value of it\'s first parameter', function () {
            var result = myModule.echo('test');
            expect(result).to.equal('test');
        });
    });
});
