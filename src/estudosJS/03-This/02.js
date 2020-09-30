// Método de objeto
// Quando usado dentro de um método de um objeto, o this se refere ao próprio objeto:

var object = {
    func: function() {
        return this;
    }
};
document.write(object.func());  //[object Object]

