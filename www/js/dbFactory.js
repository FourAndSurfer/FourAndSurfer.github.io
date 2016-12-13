angular.module("PizzariaApp")
    .factory("DbFactory", ['$timeout', function ($timeout) {
        var response = {};

        response.loadDb = function () {
            response.pizzas = [];
            var db = window.openDatabase(
                'pizzaria', // short name
                '1.0', // version
                'PizzariaDb', // display name
                2 * 1024 * 1024 // size in bytes
            );
            db.transaction(function (tx) {
                // Só descomenta se precisar apagar a tabela!
                // tx.executeSql('DROP TABLE IF EXISTS pizzas');
                tx.executeSql('CREATE TABLE IF NOT EXISTS pizzas (id unique, nome, ingredientes, img, preco)');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 1, "Calabresa", "Mussarela, cebola, molho e orégano", "img/pizzas/calabresa.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 1 AND nome = "Calabresa")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 2, "Margherita", "Mussarela, molho, orégano, tomate e manjericão", "img/pizzas/margherita.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 2 AND nome = "Margherita")');
                tx.executeSql('SELECT nome, ingredientes, img, preco FROM pizzas', [], function (tx, results) {
                    var len = results.rows.length,
                        i;
                    for (i = 0; i < len; i++) {
                        response.pizzas.push(results.rows.item(i));
                    }
                });
            });
        };
        return response;
    }]);