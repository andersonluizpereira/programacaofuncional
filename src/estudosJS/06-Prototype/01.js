var Animal = {
    walk: function() {
        console.log("I'm walking...");
    }
};

var Dog = Object.create(Animal);

Animal.walk(); // I'm walking...
Dog.walk(); // I'm walking... 

var Airplane = {
    fly: function() {
        console.log("I'm flying...");
    }
};

Airplane.walk();

//Qual a importância?
//Um dos conceitos mais usados em qualquer linguagem de programação é a Herança e com JavaScript ela é feita através do Prototype. Entender bem não apenas o Prototype como também o Prototype Chain é fundamental para dominar o JavaScript.
