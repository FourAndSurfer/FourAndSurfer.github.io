angular.module('PizzariaApp')
        .controller('HomeController', function ($scope, DbFactory) {
                var self = this;
                $scope.filtro = '';
                self.loadPizzasOnStart = function () {
                        $('.nav-tabs a:first').tab('show');
                };
                self.pizzaList = [{
                        nome: "Calabresa",
                        ingredientes: "Mussarela, cebola, molho e orégano",
                        img: "img/calabresa.png"
                }, {
                        nome: "Marguerita",
                        ingredientes: "Mussarela, molho, orégano, tomate e manjericão",
                        img: "img/margherita.png"
                }];
                // self.pizzaList = [];
                // self.pizzaList = DbFactory.pizzas;
                self.caguei = function () {
                        console.log("caguei");
                        console.log($scope.pizzas);
                        console.log(self.pizzaList);
                        console.log(DbFactory.pizzas);
                };
                // var loadPizzas = function () {
                //         DbFactory.pizzas(function (pizzas) {
                //                 angular.forEach(pizzas, function (pizza) {
                //                         console.log("pizza foreach");
                //                         console.log(pizza);
                //                         self.pizzaList.push(pizza);
                //                 });
                //         });
                //         console.log(self.pizzaList);
                // }
                self.loadCardapio = function () {
                        // loadPizzas();
                        console.log("loadPizzas");
                        console.log(self.pizzaList);
                }
                self.bebidaList = [{
                        Nome: "Coca-cola",
                        Descricao: "Refrigerante 2 litros",
                        Img: "img/coca-cola.png"
                }, {
                        Nome: "Coca-Zero",
                        Descricao: "Refrigerante 2 litros",
                        Img: "img/coca-zero.png"
                }, {
                        Nome: "Guaraná",
                        Descricao: "Refrigerante 2 litros",
                        Img: "img/guarana.png"
                }, {
                        Nome: "Guaraná Zero",
                        Descricao: "Refrigerante 2 litros",
                        Img: "img/guarana-zero.png"
                }, {
                        Nome: "Sprite",
                        Descricao: "Refrigerante 2 litros",
                        Img: "img/sprite.png"
                }];
                self.sobremesaList = [{
                        Nome: "DIPP'S DE CANELA",
                        Descricao: "A deliciosa massa da Domino's coberta de açúcar e canela, acompanhada de doce de leite.",
                        Img: "img/dipps.png"
                }, {
                        Nome: "CHOCOBREAD",
                        Descricao: "Massa finíssima recheada de muito chocolate e cobertura de creme de baunilha com granulado.",
                        Img: "img/chocobread.png"
                }];
        })
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