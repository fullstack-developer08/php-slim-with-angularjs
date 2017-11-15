(function() {
 angular.module('app',['ngRoute'])
 .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/cart/index.html', {
            templateUrl: '/cart/index.template.html'
        })
        .otherwise({
            redirectTo: '/cart/index.html'
        });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });
    }])
})();