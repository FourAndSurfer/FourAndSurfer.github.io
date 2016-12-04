angular.module('Pizzaria.controllers.Home', [])

.controller('HomeController', function ($scope) {
    var self = this;
    self.pizzaList = [{
        Nome: "Calabresa",
        Ingredientes: "Mussarela, cebola, molho e orégano",
        Img: "images/calabresa.png"
    }, {
        Nome: "Marguerita",
        Ingredientes: "Mussarela, molho, orégano, tomate e manjericão",
        Img: "images/margherita.png"
    }];
    self.bebidaList = [{
        Nome: "Coca-cola",
        Descricao: "Refrigerante 2 litros",
        Img: "images/coca-cola.png"
    }, {
        Nome: "Coca-Zero",
        Descricao: "Refrigerante 2 litros",
        Img: "images/guarana.png"
    }, {
        Nome: "Guaraná",
        Descricao: "Refrigerante 2 litros",
        Img: "images/guarana.png"
    }, {
        Nome: "Guaraná Zero",
        Descricao: "Refrigerante 2 litros",
        Img: "images/guarana.png"
    }, {
        Nome: "Sprite",
        Descricao: "Refrigerante 2 litros",
        Img: "images/sprite.png"
    }];
    self.sobremesaList = [{
        Nome: "DIPP'S DE CANELA",
        Descricao: "A deliciosa massa da Domino's coberta de açúcar e canela, acompanhada de doce de leite.",
        Img: "images/dipps.png"
    }, {
        Nome: "CHOCOBREAD",
        Descricao: "Massa finíssima recheada de muito chocolate e cobertura de creme de baunilha com granulado.",
        Img: "images/chocobread.png"
    }];
});