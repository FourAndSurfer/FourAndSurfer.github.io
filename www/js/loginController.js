angular.module('PizzariaApp').controller('login', ['DbFactory', '$scope', function (DbFactory, $scope) {
    //--chama o plugin de geolocalização e retorna o local do dispositivo--//
    var latidude = 0;
    var longitude = 0;
    var fbId = null;
    $("#divError").hide();
    $('#botaoLogout').hide();

    $('#localiza').click(function (event) {
        console.log('OIE');
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        //--variavel pra função geocodelatlng--//
    });

    var onSuccess = function (position) {
        //latitude = position.coords.latitude;
        //longitude = position.coords.longitude;
        var geocoder = new google.maps.Geocoder;
        geocodeLatLng(geocoder);
        //$('#endereco').val(latitude);
        // $('#complemento').val(longitude);
        function geocodeLatLng(geocoder) {
            var latlng = {
                lat: parseFloat(position.coords.latitude),
                lng: parseFloat(position.coords.longitude)
            };
            geocoder.geocode({
                'location': latlng
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        //        var separaEndereco = results[0].formatted_address.split(',', 4);
                        //        var separaBairro = separaEndereco[1].split('-', 2);
                        $('#endereco').val(results[0].address_components[1].long_name);
                        $('#complemento').val(results[0].address_components[0].long_name);
                        $('#bairro').val(results[0].address_components[2].long_name);
                        //        $('#cep').val(separaEndereco[3]);
                        $('#cep').val(results[0].address_components[7].long_name);
                        console.log(results[0]);


                    } else {
                        alert('No results found');
                    }
                } else {
                    alert('Geocoder failed due to: ' + status);
                }
            });
        }

    };

    function onError(error) {
        $('#endereco').val('message: ' + error.message);
    }

    //--transformando latitude e longitude em endereço--//





    function geocodeLatLng(geocoder) {
        var latlng = {
            lat: parseFloat(latidude),
            lng: parseFloat(longitude)
        };
        geocoder.geocode({
            'location': latlng
        }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[1]) {

                    $('#endereco').val(results[1].formatted_address);

                } else {
                    alert('No results found');
                }
            } else {
                alert('Geocoder failed due to: ' + status);
            }
        });
    }


    //    facebook

    var init = function () {
        FB.init({
            appId: '100948877060066',
            cookie: true,
            status: true,
            xfbml: true
        });
        FB.Event.subscribe('auth.authResponseChange', function (response) {

            if (response.status == 'connected') {
                FB.api('/me', {
                    locale: 'en_US',
                    fields: 'name, email'
                }, function (response) {
                    fbId = response.id;
                    console.log(response);
                    $('#loginesenha').html('<p>Olá <strong>' + response.name + '</strong> para conseguir-mos entregar sua pizza, complete seu cadastro!</p>');
                    $('#btnEntrar').hide();
                    $('#btnCadastrar').removeClass('btn-default');
                    $('#btnCadastrar').addClass('btn-primary');
                    $('#nome').val(response.name);
                    $('#email').val(response.email);

                    //                    document.getElementById('btnFace').innerHTML = '<fb:login-button align="center"  class="center-block" scope="public_profile, email" autologoutlink="true"></fb:login-button>'

                });


            } else if (response.status == 'not_authorized') {
                FB.login();

            } else {
                $('#loginesenha').html('<div class="form-group">                        <label id="usuario" for="Email">Usuário</label>                        <input id="email" type="email" class="form-control" id="Email" placeholder="Email cadastrado">                    </div>                    <div class="form-group">                        <label for="exampleInputPassword1">Senha</label>                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">                    </div>');

                //                $('#usuario').text('Usuário');
                //                $('#email').val('');
            }
            $('#btnEntrar').show();
            $('#btnCadastrar').addClass('btn-default');
            $('#btnCadastrar').removeClass('btn-primary');
        });
        document.getElementById('btnFace').innerHTML = '<fb:login-button align="center"  class="center-block" scope="public_profile, email" autologoutlink="true">Login pelo Facebook</fb:login-button>'
    }

    //    fazendo login

    $('#btnEntrar').click(function () {
        var self = this;
        var usuarioEmail = $('#email').val();
        var usuarioSenha = $('#password1').val();

        console.log('btn entrar:', DbFactory.usuarios);

        for (i = 0; i < DbFactory.usuarios.length; i++)
            if ((usuarioEmail == DbFactory.usuarios[i].email) && (usuarioSenha == DbFactory.usuarios[i].senha)) {

                $('#loginesenha').html('<p>Olá <strong>' + DbFactory.usuarios[i].nome + '</strong> seja bem vindo!</p><p>Boas compras e tenha um bom lanche!</p>');

                $('#botoesLogin').hide();
                $('#botaoLogout').show();


                break;
            }

        $('#divError').show();
    });

    //        fim login
    //    inicio logout

    $('#btnLogout').click(function () {
        $('#loginesenha').html('<div class="form-group">                        <label id="usuario" for="Email">Usuário</label>                        <input id="email" type="email" class="form-control" id="Email" placeholder="Email cadastrado">                    </div>                    <div class="form-group">                        <label for="password1">Senha</label>                        <input type="password" class="form-control" id="password1" placeholder="Senha">                    </div>                    <div id="divError" class="form-control alert-danger">Email e/ou senha invalidos!</div>                    <br/>');

        $('#botoesLogin').show();
        $('#botaoLogout').hide();
        $("#divError").hide();

    });
    //fim logout
    //        inserindo novo usuário na tabela


    $('#btncadastrarmodal').click(
        function () {
            var usuario = {
                nome: $('#nome').val(),
                email: $('#email').val(),
                tel: $('#tel').val(),
                cel: $('#cel').val(),
                endereco: $('#endereco').val(),
                complemento: $('#complemento').val(),
                bairro: $('#bairro').val(),
                cep: $('#cep').val(),
                password: $('#password').val(),
                fbId: fbId
            };

            console.log(usuario);
            DbFactory.createUser(usuario);
        }
    );

    init();
}]);