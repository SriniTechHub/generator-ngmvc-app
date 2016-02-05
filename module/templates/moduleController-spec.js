describe('<%= _.camelize(name) %>Controller', function() {

    beforeEach(module('<%= _.camelize(name) %>'));

    var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('<%= _.camelize(name) %>Controller', {$scope: scope});
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);

    }));

});
