function removeOddValues(obj) {
    // your code here
    for (keys in obj){
        if(obj[keys]%2 ==1){delete obj[keys];}
    }

}


var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj); // --> { a: 2, c: 4 }