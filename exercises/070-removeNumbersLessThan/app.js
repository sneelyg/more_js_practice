var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for(keys in obj){
        if(obj[keys]<num){
            delete obj[keys]
        }

    }
    return console.log(obj)
}
removeNumbersLessThan(3, obj);