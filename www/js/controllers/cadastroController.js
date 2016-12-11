angular.module('PizzariaApp')
.controller('CadastroController',[function($scope){

    $scope.cliente = {};



    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady(){
        var db = window.openDatabase("Database", "1.0", "BancoCodeAm", 2000000);
        db.transition(populateDB, errorCB, sucessCB);

    }

    function populateDB(tx){
        tx.executeSql('DROP TABLE IF EXISTS cadastroC');
        tx.executeSql('CREATE TABLE cadastroC (nome PRIMARY KEY ASC, email, telefone INTEGER, celular INTEGER, endereco, complemento, bairro, cep, sennha, info BOOLEAN)');
        tx.executeSql('INSERT INTO cadastroC(nome, email, telefone, celular, endereco, complemento, bairro, cep, sennha, info) VALUES("Rodrigo","rodrigo.filomeno@al.infnet.edu.br", 2125244225, 21987536007, "Av. Rio Branco, 156", "sl. 3018", "Centro", "20090-040", "rodrigo1", true)');
//        tx.executeSql('INSERT INTO cadastroC(nome, email, telefone, celular, endereco, complemento, bairro, cep, sennha, info) VALUES("{{cliente.nome}}","{{cliente.email}}", {{cliente.telefone}}, {{cliente.celular}}, "{{cliente.endereco}}", "{{cliente.complemento}}", "{{cliente.bairro}}", "{{cliente.cep}}", "{{cliente.senha}}", {{cliente.info}})');
    }
    function errorCB(err){
        alert("erro: "+ err.code);

    }
    function sucessCB(){
        alert("sucesso");
    }



}])
