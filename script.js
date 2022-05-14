// Палиндромы

function isPalindrome(input) {
  let result = input.replace(/[\s.,%?!]/g, '').toLowerCase()
  let reversedResult = result.split("", result.length).reverse().join("")
  return reversedResult === result
}
console.log("роза", isPalindrome("А роза упала на лапу Азора!")); // true
console.log("шалаш", isPalindrome("Ш4л4ш")); // true
console.log("Eva", isPalindrome("Eva, can I see bees in a cave?")); // true
console.log("машина", isPalindrome("Машина")); // false

// Поменять местами чётные и нечётные символы
function pairRevert(str) {
  let arr = str.split("", str.length)
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.length%2 === 1 ? result.push(arr[i-1]) : typeof arr[i+1] !== "undefined" ? result.push(arr[i+1]) : result.push(arr[i])
  }
  return result.join("")
}
console.log(pairRevert('apple')); //  'palpe'
console.log(pairRevert('foobar')); //  'ofbora'
console.log(pairRevert('result')); // e r u s t l
console.log(pairRevert('break')); // r b a e k
