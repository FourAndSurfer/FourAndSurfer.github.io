angular.module('PizzariaApp')
        .controller('HomeController', ['$scope', '$timeout', 'DbFactory', function ($scope, $timeout, DbFactory) {
                var self = this;
                $scope.filtro = '';
                self.loadPizzasOnStart = function () {
                        $('.nav-tabs a:first').tab('show');
                };

                self.pizzaList = DbFactory.pizzas;

                self.bebidaList = [{
                        nome: "Coca-cola",
                        descricao: "Refrigerante 2 litros",
                        img: "img/coca-cola.png"
                }, {
                        nome: "Coca-Zero",
                        descricao: "Refrigerante 2 litros",
                        img: "img/coca-zero.png"
                }, {
                        nome: "Guaraná",
                        descricao: "Refrigerante 2 litros",
                        img: "img/guarana.png"
                }, {
                        nome: "Guaraná Zero",
                        descricao: "Refrigerante 2 litros",
                        img: "img/guarana-zero.png"
                }, {
                        nome: "Sprite",
                        descricao: "Refrigerante 2 litros",
                        img: "img/sprite.png"
                }];
                self.sobremesaList = [{
                        nome: "DIPP'S DE CANELA",
                        descricao: "A deliciosa massa da Domino's coberta de açúcar e canela, acompanhada de doce de leite.",
                        img: "img/dipps.png"
                }, {
                        nome: "CHOCOBREAD",
                        descricao: "Massa finíssima recheada de muito chocolate e cobertura de creme de baunilha com granulado.",
                        img: "img/chocobread.png"
                }];
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