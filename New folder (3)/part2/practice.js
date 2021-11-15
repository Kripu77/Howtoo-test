function dummy () {
  return 1;
}
console.log(dummy())
/**
 * Reverse an array
//  * 
//  * @example
//  * 
//  * reverse([1,2,3]) returns [3,2,1]
//  * 
//  * @param {array} array
//  * @returns {array}
 */

//our problem array
let array = [1,4,5,7,9]



// I will use the sort method and concept of closure to get the array our from the fn

function reverse (array) {

 return array.sort((a,b)=>{
    return b-a;

  })


}


console.log(reverse(array))


//result [9, 7, 5, 4, 1]

// /**
//  * Reverse a string
//  * 
//  * @example
//  * 
//  * stringReverse('hello') returns 'olleh'
//  * 
//  * @param {string} text
//  * @returns {string}
//  * 
let textProblem = 'Kripu';


function stringReverse (text) {


  
  //create array from the text with from method

  let textArray = Array.from(text);
  console.log(textArray)

  //reverse the formed array

  let reversedAray = textArray.reverse();
  console.log(reversedAray);

  //join method and again the concept of closure

  return  rerversedText = reversedAray.join('');
  // console.log(rerversedText)





 
}
console.log(stringReverse(textProblem)) //output upirK






// /**
//  * return a fixed length fibonacci list
//  * 
//  * @example
//  * 
//  * fibonacci(5) returns [1,1,2,3,5]
//  * 
//  * @param {number} length
//  * @returns {array}
//  */
function fibonacci (length) {


 for(let fibArray = [0,1], i=0,j=1,k=0; k<length;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
        return fibArray;
    }
  
}

console.log(fibonacci(4))

// /**
//  * return the biggest number in the array
//  * 
//  * @example
//  * 
//  * biggest([1,3,5,7,9]) returns 9
//  * 
//  * @param {array} array
//  * @returns {number}
//  */

let arrayProblem = [1,4,5,6,7]

function biggest (array) {
  

//reduce method
return array.reduce((acc, curr)=>{

  //conditional to check if current value being mapped in the array is greater than acc.
if(curr> acc){
  acc= curr
  
}
//closure
return acc;
}, 0)







}

console.log(biggest(arrayProblem)); //output 7

// /**
//  * Creates an array of numbers progressing from 
//  * start up to, but not including, end
//  * 
//  * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
//  * DON'T USE ANY 3RD PARTY LIBRARIES.
//  * 
//  * @example
//  * 
//  * range(0,4) returns [0,1,2,3]
//  * 
//  * @param {number} start 
//  * @param {number} end 
//  * @returns {array}
//  */
function range (start, end) {
//empty array
  let range = []
//for loop to check if the starting value is less than end
  for(let i=start; i<end; i++){
    range.push(start++)
    //simply push the value and increment till it reaches the threeshold
    }
  return range ;

}

//our range
console.log(range(0,5))

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
//  * @example
//  * 
//  * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
//  * 
//  * @param {array} array
//  * @returns {array}
 */
function flatten(array) {

  //empty array

  let result = [];

  //for each method
  array.forEach((el) => {
    if (el instanceof Array) {
      result.push(...flatten(el));
    } else result.push(el);
  });
  return result;
}
console.log(flatten([1, [2, 3, [4]]]));

// module.exports = {
//   dummy,
//   fibonacci,
//   reverse,
//   flatten,
//   biggest,
//   flatten,
//   stringReverse,
//   range
// };
