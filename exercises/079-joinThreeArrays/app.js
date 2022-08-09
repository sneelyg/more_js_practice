function joinThreeArrays(arr1, arr2, arr3) {

  // your code here
  return arr1.concat(arr2, arr3);
 /* let result= [];
  result.push (arr1);
  result.push (arr2);
  result.push (arr3);
return result.flat();*/
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]