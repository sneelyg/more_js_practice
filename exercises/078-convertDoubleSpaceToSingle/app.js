function convertDoubleSpaceToSingle(str) {
    // your code here
    let array = (str.split("  "));
    let singleSpaced= array.join(" ");
    return singleSpaced;

}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces
