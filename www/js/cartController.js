angular.module('PizzariaApp')
    .controller('CartController', ['CartFactory', function (CartFactory) {
        $('#troco').hide();
        var self = this;
        self.log = function () {
            console.log(CartFactory.cart);
        };
        self.cart = CartFactory.cart;
        self.sumQty = function (cartItem) {
            cartItem.qty++;
        };
        self.subtractQty = function (cartItem) {
            cartItem.qty--;
            if (cartItem.qty == 0) {
                self.deleteItem(cartItem);
            }
        };
        self.totalValue = 0;
        self.totalQty = 0;
        self.totalValueAndQty = function () {
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
        self.deleteItem = function (cartItem) {
            // procuro o item que eu enviei como parametro
            // para poder descobrir o seu index e remover do array
            for (var i = 0; i < self.cart.length; i++) {
                if (self.cart[i].nome == cartItem.nome) {
                    self.cart.splice(i, 1);
                }
            }
        };


        self.checkConnection = function () {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'Sem conecção a internet!';

            if (states[networkState] == 'Sem conecção a internet!') {
                alert('Connection type: ' + states[networkState]);
                Materialize.toast('Pedido não foi finalizado.', 3000);
            } else if (states[networkState] != 'Sem conecção a internet!') {
                self.cart = [];
                self.totalValue = 0;
                self.totalQty = 0;
                CartFactory.cart = [];
                navigator.vibrate(300);
                Materialize.toast('Pedido finalizado com sucesso!', 2000);
            };
        }



        self.zeraCarrinho = function () {
            self.cart = [];
            self.totalValue = 0;
            self.totalQty = 0;
            CartFactory.cart = [];
        }

        $('#formaPgt').change(function () {
            if ($('#formaPgt').val() == "dinheiro") {
                $('#troco').show();
            } else {
                $('#troco').hide();
            }
        })

}]);
