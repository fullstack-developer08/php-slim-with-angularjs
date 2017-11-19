(function() {
 angular.module('app',['ngRoute'])
 .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/cart', {
            templateUrl: '/cart/index.template.html'
        })
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
        });
    }])
})();