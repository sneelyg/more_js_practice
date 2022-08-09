function countNumberOfKeys(obj) {
    // your code here
    var contador =0;
    for(keys in obj){contador++;}
    return contador;

}

var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 5
  };
  var output = countNumberOfKeys(obj);
  console.log(output); // --> 3ç
