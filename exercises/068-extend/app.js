var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // 
    for (keys in obj2){
        if (!(keys in obj1)){
       console.log(keys);
       obj1[keys]=obj2[keys];}
    }
    return true;
}

extend  (obj1, obj2);
console.log(obj1);