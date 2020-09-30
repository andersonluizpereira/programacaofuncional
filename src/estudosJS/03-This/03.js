//E no caso de objetos aninhados, o this vai se referir ao objeto pai mais próximo:
var father = {
    name: "father",
    child: {
        name: "child",
        func: function() {
            return this.name;
        }
    }            
}

console.log(father.child.func());