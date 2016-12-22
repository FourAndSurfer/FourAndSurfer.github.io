$('#fblogout').hide();

document.addEventlistener("deviceready", onDeviceReady, False);

function onDeviceReady() {

}

function fbLoginSuccess(objeto) {

    facebookConnectPlugin.api('/' + objeto.authResponse.userID + "?fields=id,name,email", [],
        function (response) {

            $('#loginesenha').html('<p>Olá <strong>' + response.name + '</strong> para conseguir-mos entregar sua pizza, complete seu cadastro!</p>');
            $('#btnEntrar').hide();
            $('#btnCadastrar').removeClass('btn-default');
            $('#btnCadastrar').addClass('btn-primary');
            $('#nome').val(response.name);
            $('#email1').val(response.email);

        },
        function (error) {
            alert("Failed: " + error);
        });


    $('#fblogin').hide();
    $('#fblogout').show();
}

function LoginToFB() {
    facebookConnectPlugin.login(["public_profile", "email", ""],
        fbLoginSuccess,
        function (error) {
            $("#status").html("Erro de autenticação");
        }
    );
}

function Logout() {
    facebookConnectPlugin.logout(function () {
            $('#loginesenha').html('<div class="form-group">                        <label id="usuario" for="Email">Usuário</label>                        <input id="email" type="email" class="form-control" id="Email" placeholder="Email cadastrado">                    </div>                    <div class="form-group">                        <label for="exampleInputPassword1">Senha</label>                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">                    </div>');
            $('#btnEntrar').show();
            $('#btnCadastrar').addClass('btn-default');
            $('#btnCadastrar').removeClass('btn-primary');
            $('#fblogin').show();
            $('#fblogout').hide();
        },
        function (e) {
            alert("Erro!");
        }
    );
}
