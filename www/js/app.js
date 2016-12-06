angular.module('PizzariaApp', [
    'ngRoute' //,
//    'ngAnimate'
])

.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        reloadOnSearch: false
    });
    $routeProvider.when('/login', {
        templateUrl: 'login.html',
        reloadOnSearch: false
    });
});
