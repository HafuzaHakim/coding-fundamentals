function missingLetter(str) {
  //Iterate from the first character until the last character in a string.
  for (i = 0; i < str.length; i++) {
    // console.log(i); #The current counter
    // console.log(str.charCodeAt(i)); #Get the decimal value of the current character from the input string
    // console.log(str.charCodeAt(0) + i); #Get the decimal value starting from the first character in the input string until the full length of the input string in the correct order.
    // Compare the decimal value of the input string to the decimal value of of the true sequence
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
      // return the missing decimal value and convert it to the corresponding character
      return String.fromCharCode(str.charCodeAt(0) + i);
    }
  }
}

console.log(missingLetter("abce"));
console.log(missingLetter("abcdefghjklmno"));
console.log(missingLetter("stvwx"));
console.log(missingLetter("bcdf"));
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"));
