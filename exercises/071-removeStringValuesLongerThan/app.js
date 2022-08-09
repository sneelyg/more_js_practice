function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (keys in obj){
        if (obj[keys].length > num){
            delete obj[keys];
        }
    }
    return console.log(obj);

}




var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  removeStringValuesLongerThan(1, obj);
  console.log(obj); // { age: 20, location: 'Texas' }