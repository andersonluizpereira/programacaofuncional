
// com var, o valor do segundo console.log não é esperado
function var1() {
    var n = 1;
    if (true) {
      var n = 2;
      console.log(n); // 2
    }
    console.log(n); // 2 
  }
  
  // com let, o valor do segundo console.log é esperado
  function let() {
    let n = 1;
    if (true) {
      let n = 2;
      console.log(n); // 2
    }
    console.log(n);  // 1
  }

  var1()
  let()