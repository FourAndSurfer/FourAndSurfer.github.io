function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var pizzasCollection = ["img/pizzapronta1.jpg", "img/pizzapronta2.jpg", "img/pizzapronta3.jpg", "img/pizzapronta4.jpg", "img/pizzapronta5.jpg", "img/pizzapronta6.jpg"]

var thisNumber = 0;

function changeImagesForward() {
    thisNumber += 3;
    changeImage();
}

function changeImagesBackward() {
    thisNumber -= 3;
    changeImage();
}

function changeImage() {
    if (thisNumber > 3) { thisNumber = 0; }
    if (thisNumber < 0) { thisNumber = 3; }

    document.getElementById('pizza1').src = pizzasCollection[thisNumber];
    if (thisNumber == 0) {
        document.getElementById('comprar1').onclick() = addPizzaToCart('Pepperoni', '19.99');
    }
    else if (thisNumber == 3) {
        document.getElementById('comprar1').onclick() = addPizzaToCart('Chocolate com Morango', '15.99');
    }
    document.getElementById('pizza2').src = pizzasCollection[thisNumber + 1];
    if ((thisNumber + 1) == 1) {
        document.getElementById('comprar2').onclick() = addPizzaToCart('Calabresa Acebolada', '29.95');
    }
    else if ((thisNumber + 1) == 4) {
        document.getElementById('comprar2').onclick() = addPizzaToCart('Romeu e Julieta', '15.99');
    }
    document.getElementById('comprar2').onclick() = thisNumber == 1 ? addPizzaToCart('Calabresa Acebolada', '29.95');
    if ((thisNumber + 2) == 2) {
        document.getElementById('comprar2').onclick() = addPizzaToCart('Calabresa Especial', '25.49');
    }
    else if ((thisNumber + 2) == 5) {
        document.getElementById('comprar2').onclick() = addPizzaToCart('Brigadeiro', '15.99');
    }
}