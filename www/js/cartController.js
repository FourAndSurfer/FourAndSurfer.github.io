angular.module('PizzariaApp')
.controller('CartController', [ 'CartFactory', function(CartFactory) {
    var self = this;
    self.log = function() {console.log(CartFactory.cart);};
    self.cart = CartFactory.cart;
    self.qty = function() {};
}]);