angular.module('PizzariaApp', [
    'ngRoute'
])

.config(function($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'home.html', reloadOnSearch: false });
    $routeProvider.when('/login', { templateUrl: 'login.html', reloadOnSearch: false });
});