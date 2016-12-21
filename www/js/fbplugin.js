$('#fblogout').hide();

document.addEventlistener("deviceready",onDeviceReady,False);
function onDeviceReady() {

}
function fbLoginSuccess(objeto){
    console.log(objeto);
  $("#status").html("Login Feito");
    $('#fblogin').hide();
    $('#fblogout').show();
}
function LoginToFB(){
  facebookConnectPlugin.login(["public_profile", "email"],
    fbLoginSuccess,
    function (error){
      $("#status").html("Erro de autenticação");
    }
  );
}
function Logout(){
  facebookConnectPlugin.logout (function(){
    $("#status").html("Logout Feito");
      $('#fblogin').show();
      $('#fblogout').hide();
  },
    function(e){
      alert("Erro!");
    }
  );
}
