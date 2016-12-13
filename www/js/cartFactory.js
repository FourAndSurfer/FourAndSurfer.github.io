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
            console.log(cartItem);
            console.log('cartItem added');
        }
        response.sendToCart = function (cartItem) {
            console.log((response.cart.length > 0) == false);
            if ((response.cart.length > 0) == false) {
                console.log('no one inside cart');
                addToCart(cartItem)
            } else {
                console.log('inside else of sendToCart')
                var index = null;
                for (var i = 0; i < response.cart.length; i++) {
                    if (response.cart[i].nome == cartItem.nome) { index = i }
                }
                index == null ? addToCart(cartItem) : response.cart[index].qty++;
            }
        };
        return response;
    }]);