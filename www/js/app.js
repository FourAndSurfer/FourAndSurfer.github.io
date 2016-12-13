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
            reloadOnSearch: false,
            controller: "login"
                //        controller: "CadastroController"
        });
        $routeProvider.when('/carrinho', {
            templateUrl: 'carrinho.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/sobre', {
            templateUrl: 'sobre.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/contato', {
            templateUrl: 'contato.html',
            reloadOnSearch: false
        });
    })
    .run(['DbFactory', function (DbFactory) {
        DbFactory.loadDb();
    }]);