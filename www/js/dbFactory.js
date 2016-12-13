angular.module("PizzariaApp")
    .factory("DbFactory", ['$timeout', function ($timeout) {
        var response = {};

        response.loadDb = function () {
            response.pizzas = [];
            response.bebidas = [];
            response.sobremesas = [];
            var db = window.openDatabase(
                'pizzaria', // short name
                '1.0', // version
                'PizzariaDb', // display name
                2 * 1024 * 1024 // size in bytes
            );
            db.transaction(function (tx) {
                // Insere pizzas na tabela
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

                // Insere bebidas na tabela
                // Só descomenta se precisar apagar a tabela!
                // tx.executeSql('DROP TABLE IF EXISTS bebidas');
                tx.executeSql('CREATE TABLE IF NOT EXISTS bebidas (id unique, nome, descricao, img, preco)');
                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 1, "Coca-cola", "Refrigerante 2 litros", "img/bebidas/coca-cola.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 1 AND nome = "Coca-cola")');
                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 2, "Coca-Zero", "Refrigerante 2 litros", "img/bebidas/coca-zero.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 2 AND nome = "Coca-Zero")');
                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 3, "Guaraná", "Refrigerante 2 litros", "img/bebidas/guarana.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 3 AND nome = "Guaraná")');
                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 4, "Guaraná Zero", "Refrigerante 2 litros", "img/bebidas/guarana-zero.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 4 AND nome = "Guaraná Zero")');
                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 5, "Sprite", "Refrigerante 2 litros", "img/bebidas/sprite.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 5 AND nome = "Sprite")');
                tx.executeSql('SELECT nome, descricao, img, preco FROM bebidas', [], function (tx, results) {
                    var len = results.rows.length,
                        i;
                    for (i = 0; i < len; i++) {
                        response.bebidas.push(results.rows.item(i));
                    }
                });

                // Insere sobremesas na tabela
                // Só descomenta se precisar apagar a tabela!
                // tx.executeSql('DROP TABLE IF EXISTS sobremesas');
                tx.executeSql('CREATE TABLE IF NOT EXISTS sobremesas (id unique, nome, descricao, img, preco)');
                tx.executeSql('INSERT INTO sobremesas (id, nome, descricao, img, preco) SELECT 1, "Dipp\'s de Canela", "A nossa deliciosa massa coberta de açúcar e canela, acompanhada de doce de leite.", "img/sobremesas/dipps.png", 8.99 WHERE NOT EXISTS (SELECT 1 FROM sobremesas WHERE id = 1 AND nome = "Dipp\'s de Canela")');
                tx.executeSql('INSERT INTO sobremesas (id, nome, descricao, img, preco) SELECT 2, "Chocobread", "Massa finíssima recheada de muito chocolate e cobertura de creme de baunilha com granulado.", "img/sobremesas/chocobread.png", 7.95 WHERE NOT EXISTS (SELECT 1 FROM sobremesas WHERE id = 2 AND nome = "Chocobread")');
                tx.executeSql('SELECT nome, descricao, img, preco FROM sobremesas', [], function (tx, results) {
                    var len = results.rows.length,
                        i;
                    for (i = 0; i < len; i++) {
                        response.sobremesas.push(results.rows.item(i));
                    }
                });
            });
        };
        return response;
    }]);