angular.module("PizzariaApp")
    .factory("DbFactory", ['$timeout', function ($timeout) {
        var response = {};

        response.loadDb = function () {
            response.pizzas = [];
            response.bebidas = [];
            response.sobremesas = [];
            response.usuarios = [];
            var db = window.openDatabase(
                'pizzaria', // short name
                '1.0', // version
                'PizzariaDb', // display name
                2 * 1024 * 1024 // size in bytes
            );
            db.transaction(function (tx) {
                // Insere pizzas na tabela
                // Só descomenta se precisar apagar a tabela!
//                                 tx.executeSql('DROP TABLE IF EXISTS pizzas');
                tx.executeSql('CREATE TABLE IF NOT EXISTS pizzas (id unique, nome, ingredientes, img, preco)');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 1, "Calabresa", "Mussarela, cebola, molho e orégano", "img/pizzas/calabresa.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 1 AND nome = "Calabresa")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 2, "Margherita", "Mussarela, molho, orégano, tomate e manjericão", "img/pizzas/margherita.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 2 AND nome = "Margherita")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 3, "Carne Seca", "Mussarela, molho, orégano, Carne-seca, cebola, requeijão e parmesão", "img/pizzas/carne-seca.png", 20.00 WHERE NOT EXISTS (SELECT 3 FROM pizzas WHERE id = 3 AND nome = "Carne Seca")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 4, "4 Queijos", "Mussarela, molho, orégano, requeijão, parmesão e gorgonzola", "img/pizzas/4queijos.png", 20.00 WHERE NOT EXISTS (SELECT 4 FROM pizzas WHERE id = 4 AND nome = "4 Queijos")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 5, "Branca de Neve", "Mussarela, Mussarela de bufala, Requeijão, Parmesão, Manjericão, Molho e Orégano", "img/pizzas/bufala.png", 20.00 WHERE NOT EXISTS (SELECT 5 FROM pizzas WHERE id = 5 AND nome = "Branca de Neve")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 6, "Frango", "Frango, Cebola, Requeijão, Molho, Orégano e Requeijão.", "img/pizzas/frango.png", 20.00 WHERE NOT EXISTS (SELECT 6 FROM pizzas WHERE id = 6 AND nome = "Frango")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 7, "Mussarela", "Molho, Mussarela e Orégano.", "img/pizzas/mussarela.png", 20.00 WHERE NOT EXISTS (SELECT 7 FROM pizzas WHERE id = 7 AND nome = "Mussarela")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 8, "Pepperoni", "Molho, Mussarela, Orégano e Pepperoni.", "img/pizzas/pepperoni.png", 20.00 WHERE NOT EXISTS (SELECT 8 FROM pizzas WHERE id = 8 AND nome = "Pepperoni")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 9, "Portuguesa", "Mussarela, Cebola, Pimentão, Presunto, Azeitona preta, Molho, Orégano e Ovo de codorna fatiado.", "img/pizzas/portuguesa.png", 20.00 WHERE NOT EXISTS (SELECT 9 FROM pizzas WHERE id = 9 AND nome = "Portuguesa")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 10, "Toscana", "Cebola, Calabresa, Azeitona preta, Mussarela, Molho, Orégano, Requeijão, Tomate e Manjericão.", "img/pizzas/toscana.png", 20.00 WHERE NOT EXISTS (SELECT 10 FROM pizzas WHERE id = 10 AND nome = "Toscana")');
                tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 11, "Vegetariana", "Azeitona preta, Cebola, Champignon, Molho, Mussarela, Orégano e Pimentão.", "img/pizzas/vegetariana.png", 20.00 WHERE NOT EXISTS (SELECT 11 FROM pizzas WHERE id = 11 AND nome = "Vegetariana")');
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

                // Insere usuários na tabela
                // Só descomenta se precisar apagar a tabela!
                // tx.executeSql('DROP TABLE IF EXISTS usuarios');
                tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id unique, nome, email, tel1, tel2, rua, compl, bairro, cep, senha, info BIT)');
                tx.executeSql('INSERT INTO usuarios (id, nome, email, tel1, tel2, rua, compl, bairro, cep, senha, info) SELECT 1, "admin", "admin@admin.pizzaria.com.br", "2524-4225", "98753-6007", "Av. Rio Branco", "156 sl.3018", "centro", "20040-901", "P@ssw0rd", 1 WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE id = 1 AND nome = "admin")');
                tx.executeSql('INSERT INTO usuarios (id, nome, email, tel1, tel2, rua, compl, bairro, cep, senha, info) SELECT 2, "Rodrigo Filomeno", "rodrigo.filomeno@al.infnet.edu.br", "2524-4225", "98753-6007", "Av. Rio Branco", "156 sl.3018", "centro", "20040-901", "senha", 2 WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE id = 2 AND nome = "Rodrigo Filomeno")');
                tx.executeSql('SELECT nome, email, tel1, tel2, rua, compl, bairro, cep, senha, info FROM usuarios', [], function (tx, results) {
                    var len = results.rows.length,
                        i;
                    for (i = 0; i < len; i++) {
                        console.log('at  users');
                        console.log(results.rows.item(i));
                        response.usuarios.push(results.rows.item(i));
                    }
                });

            }, function (err) {
                console.log(err);
            });

        };
        return response;
    }]);
