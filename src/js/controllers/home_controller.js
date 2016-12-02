angular.module('Pizzaria.controllers.Home', [])

.controller('HomeController', function($scope) {
    var self = this;
    self.pizzaList = [{
            Nome: "Calabresa",
            Ingredientes: "Mussarela, cebola, molho e orégano",
            Img: "img/calabresa.png"
        },
        {
            Nome: "Marguerita",
            Ingredientes: "Mussarela, molho, orégano, tomate e manjericão",
            Img: "img/margherita.png"
        }
    ];
});