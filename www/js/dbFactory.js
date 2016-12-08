angular.module("PizzariaApp")
    .factory("DbFactory", ['$timeout', function ($timeout) {
        var response = {};
        // var db = window.openDatabase(
        //     'pizzaria', // short name
        //     '1.0', // version
        //     'PizzariaDb', // display name
        //     2 * 1024 * 1024 // size in bytes
        // );
        // db.transaction(function (tx) {
        //     tx.executeSql('CREATE TABLE IF NOT EXISTS pizzas (id unique, nome, ingredientes, img, preco)');
        //     tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 1, "Calabresa", "Mussarela, cebola, molho e orégano", "img/calabresa.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 1 AND nome = "Calabresa")');
        //     tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 2, "Margherita", "Mussarela, molho, orégano, tomate e manjericão", "img/margherita.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 2 AND nome = "Margherita")');
        // });
        
        var promise = $timeout(function () {
            console.log('loaded');
            response.pizzas = [];
            var db = window.openDatabase(
                'pizzaria', // short name
                '1.0', // version
                'PizzariaDb', // display name
                2 * 1024 * 1024 // size in bytes
            );
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS pizzas (id unique, nome, ingredientes, img, preco)');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 1, "Calabresa", "Mussarela, cebola, molho e orégano", "img/calabresa.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 1 AND nome = "Calabresa")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 2, "Margherita", "Mussarela, molho, orégano, tomate e manjericão", "img/margherita.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 2 AND nome = "Margherita")');
                tx.executeSql('SELECT nome, ingredientes, img, preco FROM pizzas', [], function (tx, results) {
                    console.log('transaction');
                    var len = results.rows.length,
                        i;
                    for (i = 0; i < len; i++) {
                        console.log(results.rows.item(i));
                        response.pizzas.push(results.rows.item(i));
                    }
                    console.log('pizzas na promise');
                    console.log(response.pizzas);
                });
            });
        }, 5000);
        alert('test');
        response.load = function () {
            return promise;
        };
        return response;
    }]);