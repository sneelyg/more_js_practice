
function addToFrontOfNew(arr, element) {
    // Write your function here
    let newArray = [];
    newArray.push(element);
    for(let i=0; i<arr.length; i++){  
    newArray.push(arr[i]);}
 

    return newArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]