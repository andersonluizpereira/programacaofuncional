// Bind
// Agora que já entendemos o this em JavaScript e os métodos call e apply, podemos estudar o método bind.
// O bind é muito semelhante ao call e apply: serve para passarmos um contexto para uma função,
//que não é dela, e podermos executá-la. A diferença é que call e apply invocam a função imediatamente:

var person = {  
    name: "Matheus",
    hello: function(thing) {
      console.log(this.name + " disse Olá " + thing);
    }
  }
  
  var hello = person.hello.bind(person);
  hello("Mundo"); // Matheus disse Olá Mundo