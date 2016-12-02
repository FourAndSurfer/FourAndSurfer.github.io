angular.module('Pizzaria', [
  'ngRoute',
  'mobile-angular-ui',
  'Pizzaria.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});