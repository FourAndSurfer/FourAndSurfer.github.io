$('#localiza').click(function (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

});




var onSuccess = function (position) {
    $('#endereco').val(position.coords.latitude);
    $('#complemento').val(position.coords.longitude);

};



function onError(error) {
    $('#endereco').val('message: ' + error.message);
}
