angular.module('PizzariaApp')
        .controller('HomeController', ['$scope', 'DbFactory', 'CartFactory', function ($scope, DbFactory, CartFactory) {
                var self = this;
                $scope.filtro = '';
                self.loadPizzasOnStart = function () {
                        $('.nav-tabs a:first').tab('show');
                };

                self.pizzaList = DbFactory.pizzas;
                self.bebidaList = DbFactory.bebidas;
                self.sobremesaList = DbFactory.sobremesas;

                self.sendToCart = function(cartItem) {
                        CartFactory.sendToCart({
                                nome: cartItem.nome,
                                preco: cartItem.preco,
                                img: cartItem.img
                        });
                };
                self.pizza = {};
                self.addPizzaToModal = function(pizza) {
                        self.pizza.nome = pizza.nome;
                        self.pizza.ingredientes = pizza.ingredientes;
                        self.pizza.img = pizza.img;
                        self.pizza.preco = pizza.preco;
                };
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