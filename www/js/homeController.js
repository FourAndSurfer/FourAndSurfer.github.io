angular.module('PizzariaApp')
        .controller('HomeController', ['$scope', '$timeout', 'DbFactory', function ($scope, $timeout, DbFactory) {
                var self = this;
                $scope.filtro = '';
                self.loadPizzasOnStart = function () {
                        $('.nav-tabs a:first').tab('show');
                };

                self.pizzaList = DbFactory.pizzas;
                self.bebidaList = DbFactory.bebidas;
                self.sobremesaList = DbFactory.sobremesas;
        }])
        .directive('showtab',
                function () {
                        return {
                                link: function (scope, element, attrs) {
                                        element.click(function (e) {
                                                e.preventDefault();
                                                $(element).tab('show');
                                        });
                                }
                        };
                });