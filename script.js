
// 1. Write a js program to read and print elements of array.
// var array=[1,2,3,4,5,6];
// function printArray(arr){
//     for(let i=0;i<=arr.length;i++){
//         console.log(arr[i]);
//     }
// }
// printArray(array);


// 2. Write a js program to print all negative elements in an array.


//                 var arr=[1,2,-5,4,-88,-36,15,-78,37,-6];
// let result=0;
// function printNegativeNum(arr){

//         for(let i=0;i<=arr.length;i++){
//             if(arr[i]<0){
//                 console.log(arr[i]);
//             }
//         }

// }
// printNegativeNum(arr);

// 3. Write a js program to find sum of all array elements.
// var arr=[1,2,3,4,5,6,7,8];
// var sum=0;
// function sumOfArr(arr){
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     console.log(sum);

// }
// sumOfArr(arr);


//4. Write a js program to find maximum and minimum element in an array.
// var arr=[4,1,9,7,66,55,37,99,5,8];
// var maximum=arr[0];
// var minimum=arr[0];
// function findMaxAndMIn(arr){
//     for(let i=1 ;i<arr.length;i++){
//         if(arr[i]>maximum){
//         maximum=arr[i];
//     }  
//     if(arr[i]<minimum){
//         minimum=arr[i];
//     }
//     }
//     console.log("Maximum element: " + maximum);
//     console.log("Minimum element: " + minimum);
// }
// findMaxAndMIn(arr);


//5. Write a js program to find second largest element in an array.
// var arr=[5,7,9,6,1,8,4,3,2,11,88,57,67,5,51,];
// function secondLargestElement(arr){
//     if (arr.length<2){
//         return null;
//     }
//     var largest=Number.NEGATIVE_INFINITY;
//     var secondLargest=Number.NEGATIVE_INFINITY;
//     for(let i=0;i<arr.length;i++){
//         if (arr[i]>largest){
//             secondLargest=largest;
//             largest=arr[i];
//         }else if(arr[i]>secondLargest && arr[i] != largest){
//             secondLargest=arr[i];
//         }
//     }
//     return secondLargest;
// }
// var secondLargest=secondLargestElement(arr);
// console.log(`second largest element is ${secondLargest}`);


//6. Write a js program to count total number of even and odd elements in an array.

// var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// var evenCount=0;
// var oddount=0;
// function countEvenAndOdd(arr) {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             evenCount++;
//         }else{
//             oddount++;
//         }
//     }
//     console.log("total Number of even count",evenCount);
//     console.log("total Number of odd count",oddount);

// }
// countEvenAndOdd(arr);


//7. Write a js program to count total number of negative elements in an array.
// var arr=[-13,-85,25,-7,14,-98,54,65,-63,-1];
// negativeNumber=0;
// function totalNumberOfNegativeElement(arr){
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]<0){

//             negativeNumber++;

//         }
//     }
//     console.log("Total number of negative elements: ",negativeNumber);

// }
// totalNumberOfNegativeElement(arr);

//8. Write a js program to copy all elements from an array to another array.
// var arr=[1,3,2,4,5,6,7,8,9];
// var copy=[];
// function copyArr(arr){
//     // copy=arr;
//     for(let i=0;i<arr.length;i++){
//         copy.push (arr[i]);
//     }
// }

// copyArr(arr);
// console.log(`This is the copy of orignal array${copy}`);
//9. Write a js program to insert an element in an array.
// var arr=[1,2,3];
// var result=0;
// function insertElement(arr){
//      result=arr.push(5);
// }
// insertElement(arr);
// console.log(result);
// console.log(arr);

//10. Write a js program to delete an element from an array at specified position.
// var arr=[1,2,3,4,5,6,7,8,9];
// var result=arr.splice(1,3);
// console.log(result);
// console.log(arr);

//11. Write a js program to count frequency of each element in an array.
// function countFrequency(arr) {
//     let frequency = {};

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (frequency[item]) {
//             frequency[item]++;
//         } else {
//             frequency[item] = 1;
//         }
//     }

//     return frequency;
// }

// // Example usage:
// let array = [1, 2, 2, 3, 3, 3, 4, 4, 4,4,4,4,4,4,4, 4];
// let result = countFrequency(array);
// console.log(result);

//12. Write a js program to print all unique elements in the array.
// var array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];
// function findUniqueElements(arr) {
//     let frequency = {};
//     let uniqueElements = [];

//     // Count the frequency of each element
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (frequency[item]) {
//             frequency[item]++;
//         } else {
//             frequency[item] = 1;
//         }
//     }

//     // Find elements with a frequency of 1 (unique elements)
//     for (let item in frequency) {
//         if (frequency[item] === 1) {
//             uniqueElements.push(item);
//         }
//     }

//     return uniqueElements;
// }

// // Example usage:
// let uniqueElements = findUniqueElements(array);
// console.log(uniqueElements);

//13. Write a js program to count total number of duplicate elements in an array.
// var array = [1, 2, 2, 3, 3, 11, 3, 4, 9, 9, 4, 11, 4, 8, 5, 5,99,99,99, 8];
// function countTotalDuplicates(arr) {
//     // Create an object to store the count of each element
//     let elementCount = {};
//     let duplicateCount = 0;

//     // Iterate through the array and count occurrences of each element
//     arr.forEach(element => {
//         if (elementCount[element] === undefined) {
//             elementCount[element] = 1;
//         } else {
//             elementCount[element]++;
//         }
//     });

//     // Count the number of duplicate elements
//     for (let key in elementCount) {
//         if (elementCount[key] > 1) {
//             duplicateCount++;
//         }
//     }

//     return duplicateCount;
// }
// console.log("Total number of duplicate elements:", countTotalDuplicates(array));

//14. Write a js program to delete all duplicate elements from an array.
// function removeDuplicates(arr) {
//     // Create an object to store the count of each element
//     let elementCount = {};

//     // Iterate through the array and count occurrences of each element
//     arr.forEach(element => {
//         if (elementCount[element] === undefined) {
//             elementCount[element] = 1;
//         } else {
//             elementCount[element]++;
//         }
//     });

//     // Create a new array to store elements that appear only once
//     let uniqueElements = arr.filter(element => elementCount[element] === 1);

//     return uniqueElements;
// }

// // Example usage
// var array = [1, 2, 2, 3, 3, 11,640,4, 9, 9, 4, 11, 4, 8, 5, 5, 8];
// var result = removeDuplicates(array);
// console.log("Array after removing duplicates:", result);

//15. Write a js program to merge two array to third array.

// var arryA=[1,2,3,4,5,6]
// var arryB=[7,8,9,10,11]
// function mergedTwoArray(arryA,arryB){
//     let mergeArray=[...arryA, ...arryB];
//     return mergeArray;
// }
// var arryC=mergedTwoArray(arryA,arryB);
// console.log(arryC);
// 16. Write a js program to find reverse of an array.
//  var array=[1,2,3,4,5,6,7,8,9]
//  function reverseArrayInPlace(arr){
//     return arr.reverse();
//  }
//  var reversedArray=reverseArrayInPlace(array);
//  console.log("Here is revered of original Array",reversedArray);


// 17. Write a js program to put even and odd elements of array in two separate array.
var arryA=[1,2,3,4,5,6,7,8,9,10,11];
function seprateEvenAndOdd(arr){
    var evenElement=[];
    var oddElement=[];
    arr.forEach(element=>{
        if (element%2==0){
         evenElement.push(element);
         }else{oddElement.push(element)}
        }
    );
    return {evenElement,oddElement};
}
var result=seprateEvenAndOdd(arryA);
console.log(result.evenElement);
console.log(result.oddElement);

// function findEven(arryA) {
//    for(let i=1;i<arryA.length;i++){
//     if (i%2==0){
//         evenElement.push(i);
//     }else{oddElement.push(i)}
//    }
//    return evenElement,oddElement;
// }

// var result=findEven(arryA);
// console.log("Even",evenElement);
// console.log("odd",oddElement);


//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//             duplicateElement.push[i]
//         }
//     }
//     return false;
// }
// console.log(totalNumOfDuplicateElement(array));


// var studentNames=["ali","aslam","akmal","zuraiz","Nadir"]
// function getStudentNames(m,b){
//     console.log("getStudentNames called",m,b);
//     if (m=="akmal"){
//         return m+ "fail";
//     }
//     return m+"pass";
// }
// var result=studentNames.map(getStudentNames)
// console.log("result is",result);




// var result=studentNames.forEach(getStudentNames)
// console.log("result is",result);

//  function customForEach(arr, cb){

//         for( var i=0;i<arr.length;i++){
//             cb(arr[i],i)
//         }
//  }
// customForEach(studentNames,getStudentNames)



// var num=[10,20,3,65,8,78,9,75,12]
// // var newArr=[]
// function multiplyr(val){
// if(val%2==0) {
//     return val
// }
// }
// var newArry=num.filter(multiplyr)
// console.log(newArry);



// var addTwoNum=(a,b)=>{
//     return a+b
// }

// var addTwoNum=(a,b)=>
//     a+b;0

// var result=addTwoNum(10,15);
// console.log(result);