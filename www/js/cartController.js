angular.module('PizzariaApp')
.controller('CartController', [ 'CartFactory', function(CartFactory) {
    $('#troco').hide();
    var self = this;
    self.log = function() {console.log(CartFactory.cart);};
    self.cart = CartFactory.cart;
    self.qty = function() {};
    self.sumQty = function(cartItem) {
        cartItem.qty++;
    };
    self.subtractQty = function(cartItem) {
        cartItem.qty--;
        if (cartItem.qty == 0) { self.deleteItem(cartItem); }
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

    // função para deletar item do carrinho
    self.deleteItem = function(cartItem) {
        // procuro o item que eu enviei como parametro
        // para poder descobrir o seu index e remover do array
        for (var i = 0; i < self.cart.length; i++) {
            if (self.cart[i].nome == cartItem.nome) {
                self.cart.splice(i, 1);
            }
        }
    };
    $('#formaPgt').change(function(){
        if ($('#formaPgt').val() == "dinheiro"){
            $('#troco').show();
        } else {
            $('#troco').hide();
        }
    })

}]);
