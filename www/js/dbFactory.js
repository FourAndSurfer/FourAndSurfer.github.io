angular.module("PizzariaApp")
    .factory("DbFactory", function () {
        var pizzas = [];
        var db = window.openDatabase(
            'pizzaria', // short name
            '1.0', // version
            'PizzariaDb', // display name
            2 * 1024 * 1024 // size in bytes
        );
        db.transaction(function (tx) {
            console.log("hue");
            // tx.executeSql('DROP TABLE IF EXISTS pizzas'); //  INTEGER PRIMARY KEY AUTOINCREMENT
            tx.executeSql('CREATE TABLE IF NOT EXISTS pizzas (id unique, nome, ingredientes, img, preco)');
            tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 1, "Calabresa", "Mussarela, cebola, molho e orégano", "img/calabresa.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 1 AND nome = "Calabresa")');
            tx.executeSql('INSERT INTO pizzas (id, nome, ingredientes, img, preco) SELECT 2, "Margherita", "Mussarela, molho, orégano, tomate e manjericão", "img/margherita.png", 20.00 WHERE NOT EXISTS (SELECT 1 FROM pizzas WHERE id = 2 AND nome = "Margherita")');
            tx.executeSql('SELECT nome, ingredientes, img, preco FROM pizzas', [], function (tx, results) {
                var len = results.rows.length,
                    i;
                for (i = 0; i < len; i++) {
                    console.log(results.rows.item(i));
                    // pizzas.push(results.rows.item(i));
                    pizzas.push({
                        nome: results.rows.item(i).nome,
                        ingredientes: results.rows.item(i).ingredientes,
                        img: results.rows.item(i).img,
                        preco: results.rows.item(i).preco
                    });
                }
                console.log(pizzas);
            });
        });

        return {
            pizzas: function () {
                return pizzas;
            }
        };
    });