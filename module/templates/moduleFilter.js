angular.module('<%= _.camelize(name) %>').filter('<%= _.camelize(name) %>Filter', function() {
    return function(input,arg) {
        return 'output';
    };
});
