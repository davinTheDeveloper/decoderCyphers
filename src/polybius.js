// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

 
function polybius(input, encode = true) {
  // your solution code here
  const polyGrid = {
    'a': '11',
    'f': '12',
    'l': '13',
    'q': '14',
    'v': '15',
    'b': '21',
    'g': '22',
    'm': '23',
    'r': '24',
    'w': '25',
    'c': '31',
    'h': '32',
    'n': '33',
    's': '34',
    'x': '35',
    'd': '41',
    'i': '42',
    'j': '42',
    'o': '43',
    't': '44',
    'y': '45',
    'e': '51',
    'k': '52',
    'p': '53',
    'u': '54',
    'z': '55',
  };

let output = "";
let input1 = input.toLowerCase();

if(encode){

// loop through input
for (let i = 0; i < input1.length; i++){

// assign the input indexed to a var
  const char = input1[i];

  //conditional for index in object
  if(polyGrid[char]) {

    //output accumulate value that matches indexed and object
    output += polyGrid[char];
 
  } else {

    // output accumulate indexed 
    output += char;
    }
  }

} else {
  //if encode is false
  // split input1 and assign var for it
  const input2 = input1.split(' ');
  let newArr = [];

  // conditional for length of numbers is odd
  if (input2.join('').length % 2 !== 0){
  return false;
  }

  // else loop input2
  for (let j = 0; j < input2.length; j++){

    //assign input2 indexed a var
  let currentStr = input2[j];
  let output1 = "";

  //loop new var by pairs
  for(let i = 0; i < currentStr.length; i += 2) {

    // new var for 
    let num = `${currentStr[i]}${currentStr[i + 1]}`;
    console.log(num);
console.log(num);
    //conditional for 42 returning i or j
    if (num === 42) {
        output1 += '(i/j)';
    } else {

      //conditional if not 42 find object indexed equal to num
      const findLetter = Object.keys(polyGrid).filter(letter => {
        const value = polyGrid[letter];
        return value === num;
      
    })
    // output1 accumulate each value returned by the conditional

    output1 += findLetter; 
     console.log(output1);
  }}
  //push output1 into new array
  newArr.push(output1);
}
//output accumualtes all the values in newArr and joins them
output += newArr.join(" ");
}
return output;
}

module.exports = polybius;





