angular.module('PizzariaApp')
    .factory("CartFactory", [function () {
        response = {};
        response.cart = [];
        var addToCart = function (cartItem) {
            response.cart.push({
                img: cartItem.img,
                nome: cartItem.nome,
                preco: cartItem.preco,
                qty: 1
            });
        }
        response.sendToCart = function (cartItem) {
            if ((response.cart.length > 0) == false) {
                addToCart(cartItem)
            }
            angular.forEach(response.Cart, function (value, key) {
                if (value.nome == cartItem.nome) {
                    value.qty++;
                } else {
                    addToCart(cartItem);
                }
            });
        };
        return response;
    }]);