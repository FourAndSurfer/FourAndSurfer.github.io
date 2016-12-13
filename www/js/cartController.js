angular.module('PizzariaApp')
.controller('CartController', [ 'CartFactory', function(CartFactory) {
    var self = this;
    self.log = function() {console.log(CartFactory.cart);};
    self.cart = CartFactory.cart;
    self.qty = function() {};
    self.sumQty = function(cartItem) {
        cartItem.qty++;
    };
    self.subtractQty = function(cartItem) {
        cartItem.qty--;
    };
    self.totalValue = 0;
    self.totalQty = 0;
    self.totalValueAndQty = function() {
        var value = 0;
        var qty = 0;
        for (var i = 0; i < self.cart.length; i++) {
            value += self.cart[i].preco * self.cart[i].qty;
            qty += self.cart[i].qty;
        }
        self.totalValue = value;
        self.totalQty = qty;
    };
}]);