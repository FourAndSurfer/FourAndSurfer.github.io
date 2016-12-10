function callBackMudancasStatus(response) {
    //    O objeto de resposta é retornado com o campo status, que faz o app saber o status do usuario
    if (response.status === "connected") {
        //        Caso o usuário esteja logado, execute minha api para recuperar as informacoes
        $('#btnface').hide();
        $('#teste').append('<a id="logout" class="btn btn-danger btn-xs" href="javascript:void(0);" onclick="logout();">Sair</a>')
        testAPI();
    } else if (response.status === "not_authorized") {
        //        conectado porem não autorizou o app
        $('#logout').remove();
        $('#btnface').show();
    } else {
        //        usuario desconectado do facebook
        $('#logout').remove();
        $('#btnface').show();
    }
};

window.fbAsyncInit = function () {
    FB.init({
        appId: '100948877060066',
        cookie: true,
        status: true,
        version: '2.1'
    });

    FB.getLoginStatus(function (response)) {
        callBackMudancasStatus(response);
    };
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
    //    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('teste').innerHTML =
            '<p>Obrigado por logar, ' + response.name + '!</p><p>Seja bem Vindo</p>';
    });
};

function logout() {
    FB.logout(function (response) {
        callBackMudancasStatus(response);
        document.getElementById('teste').innerHTML =
            '<p>Voce fez logout, Obrigado por utilizar o aplicativo!</p><p>Volte Sempre</p>';
    });
};

function login() {
    FB.login(function (response) {
        callBackMudancasStatus(response);
    });
};
