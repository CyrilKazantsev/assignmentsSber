// Палиндромы

function isPalindrome(input) {
  let result = input.replace(/[\s.,%?!]/g, '').toLowerCase()
  let reversedResult = result.split("", result.length).reverse().join("")
  return reversedResult === result
}
console.log("роза", isPalindrome("А роза упала на лапу Азора!")); // true
console.log("шалаш", isPalindrome("Ш4л4ш")); // true
console.log("Eva", isPalindrome("Eva, can I see bees in a cave?")); // true
console.log("машина", isPalindrome("Машина")); // true