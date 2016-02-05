describe('<%= _.camelize(name) %>Filter', function() {

    beforeEach(module('<%= _.camelize(name) %>'));

    it('should ...', inject(function($filter) {

        var filter = $filter('<%= _.camelize(name) %>Filter');

        expect(filter('input')).toEqual('output');

    }));

});
