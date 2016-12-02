angular.module('Pizzaria.controllers.Home', [])

.controller('HomeController', function ($scope) {
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
    self.bebidaList = [{
            Nome: "Coca-cola",
            descricao: "Refrigerante 2 litros",
            Img: "img/coca-cola.png"
        },
        {
            Nome: "Coca-Zero",
            descricao: "Refrigerante 2 litros",
            Img: "img/guarana.png"
        },
        {
            Nome: "Guaraná",
            descricao: "Refrigerante 2 litros",
            Img: "img/guarana.png"
        },
        {
            Nome: "Guaraná Zero",
            descricao: "Refrigerante 2 litros",
            Img: "img/guarana.png"
        },
        {
            Nome: "Sprite",
            descricao: "Refrigerante 2 litros",
            Img: "img/sprite.png"
        }
    ];
    self.sobremesaList = [{
            Nome: "DIPP'S DE CANELA",
            descricao: "A deliciosa massa da Domino's coberta de açúcar e canela, acompanhada de doce de leite.",
            Img: "img/dipps.png"
        },
        {
            Nome: "CHOCOBREAD",
            descricao: "Massa finíssima recheada de muito chocolate e cobertura de creme de baunilha com granulado.",
            Img: "img/chocobread.png"
        }
    ];

});
