angular.module('Pizzaria', [
    'ngRoute',
    'mobile-angular-ui',
    'Pizzaria.controllers.Main',
    'Pizzaria.controllers.Home'
])

.config(function($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'home.html', reloadOnSearch: false });
    $routeProvider.when('/login', { templateUrl: 'login.html', reloadOnSearch: false });
});