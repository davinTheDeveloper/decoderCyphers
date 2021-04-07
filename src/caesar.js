// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function caesar(input, shift, encode = true) {
    // if shift meets conditional return false
    if (!shift || shift < -25 || shift > 25 || shift === 0){
      return false;
    }
    if (!encode){
      shift = -shift;
    }
    if (shift < 0){
      shift += 26;
    }
    // your solution code here
    // alphabet array
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let encoded = "";
   
    //results ignore capital letters
    inputOne = input.toLowerCase();

    //encode input with caesar cipher
    //loop through input
    //loop through alphabet
    for (let i = 0; i < inputOne.length; i++){
       let character = inputOne[i];
       //find match between input and alphabet
        if (alphabet.indexOf(character)!== -1){
          const currentPosition = alphabet.indexOf(character);
       //shift the matching alphabet index by 3
       let newPosition = (currentPosition + shift) % 26;
       //push the encoded input into a new array
          encoded += alphabet[newPosition];
       } else {
         encoded += character;
       }}
      
      //return the encoded input
      console.log(encoded);
      return encoded;
    }

module.exports = caesar;
