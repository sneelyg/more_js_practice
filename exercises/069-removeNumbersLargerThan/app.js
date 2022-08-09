var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for(keys in obj){
        if(obj[keys]>num){
            delete obj[keys]
        }

    }
    return console.log(obj)
}

removeNumbersLargerThan(5, obj);