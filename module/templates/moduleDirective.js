angular.module('<%= _.camelize(name) %>').directive('<%= _.camelize(name) %>Directive', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, fn) {


        }
    };
});
