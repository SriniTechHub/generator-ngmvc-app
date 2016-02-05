angular.module('<%= _.camelize(appname) %>').filter('sampleFilter', function() {
    return function(input,arg) {
        return 'output';
    };
});
