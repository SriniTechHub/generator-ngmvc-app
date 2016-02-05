angular.module('<%= _.camelize(appname) %>').directive('sampleDirective', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, fn) {


        }
    };
});
