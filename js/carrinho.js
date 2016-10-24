var pizzaCount = getCookie("pizzaCount") == "" ? 0 : getCookie("pizzaCount");

function addPizzaToCart(pizzaName, value) {
    pizzaCount++;
    setCookie("pizzaCount", pizzaCount, 1);
    setCookie(pizzaName, value, 1);
    var cart = document.getElementsByClassName("carrinho");
    cart[0].style.display = "inline";
    checkCookie();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkCookie() {
    var pizzaCount = getCookie("pizzaCount");
    if (pizzaCount != "") {
        document.getElementById("qtCarrinho").innerHTML = getCookie("pizzaCount");
        var cart = document.getElementsByClassName("carrinho");
        cart[0].style.display = "inline";
    } else {
        document.getElementById("qtCarrinho").innerHTML = "";
    }
}