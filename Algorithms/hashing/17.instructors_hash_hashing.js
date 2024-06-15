/*
HASH TABLE IMPLEMENTATION

Implementation of a Hash Table (without the actual storage mechanism)
- takes a pseudo hash table size parameter
- implements a hash calculator i.e. a method of calculating the hash table index
*/

class HashTable {
  constructor(size) {
    // Normally you'd make a method of storing the values like:
    // this.data = new Array(size);
    // but we want to just generate the hash
    this.size = size
  }

  calculateHash(value) {
    let hash = 0;
    value = value.toString()
    if (typeof value === 'string' || value instanceof String) {
      // sum character codes in the string
      // charCodeAt - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
      for (let i = 0; i < value.length; i++) {
        hash = (hash + value.charCodeAt(i) * i) % this.size;
      }
    } else {
      // division method
      // https://github.com/python/cpython/blob/96bf24380e44dfa1516d65480250995e737c0cb9/Objects/longobject.c#L4000
      hash = value % this.size;
    }
    return hash;
  }
}

// Common hash table sizes are 24 and 64 bit
const ht = new HashTable(16777215); // 24 bit
// const ht = new HashTable(9223372036854775807); // 64 bit

// hash for integer
// console.log('Hash for 100 is:', ht.calculateHash(100))
// // hash for decimal
// console.log('Hash for 100.55 is:', ht.calculateHash(100.55))
// // hash for string
// console.log('Hash for CFG is:', ht.calculateHash('CFG'))
// // hash for array
// word = ['g', 'i', 'r', 'l', 's']
// console.log('The hash is:', ht.calculateHash(word))

// ###################################################################

// GENERAL OBJECT EXERCISES

// """
// A program to find the sum of all items in a object.

// Input : {'a': 100, 'b':200, 'c':300}
// Output : 600
// """

// option 1
// const returnSum = (myObj) => {
//   sum = 0
//   for (i in myObj) {
//     sum += myObj[i]
//   };
//   return sum
// }

// option 2
// const returnSum = (myObj) => {
//   sum = 0
//   Object.values(myObj).forEach(val => {
//     sum += val
//   });
//   return sum
// }

// obj = {'a': 100, 'b': 200, 'c': 300}
// console.log("Sum:", returnSum(obj))

// #####################################################################

/*
Ways to sort array of objects by values in JavaScript.
*/

// myArray = [
//     {"name": "Zainab", "age": 20},
//     {"name": "Natasha", "age": 20},
//     {"name": "Sahitya", "age": 19}]

// console.log("The array printed sorted by age: ")
// // simple sort for numeric values only
// myArray.sort((a,b) => a.age - b.age)
// console.log(myArray)

// console.log("\r")

// console.log("The array printed sorted by age in descending order: ")
// myArray.sort((a,b) => b.age - a.age)
// console.log(myArray)

// console.log("\r")

// // print array sorted by both age and name
// console.log("The array printed sorted by age and name: ")
// myArray.sort((a, b) => {
//   const ageOrder = a.age - b.age;
//   // comparison method for string values only
//   const nameOrder = a.name.localeCompare(b.name);
//   return ageOrder || nameOrder;
// });
// console.log(myArray)

/*
Replace words from Object

Input : 
testStr = ‘CodeFirstGirls best for girls’, replObj = {“girls” : “all keen learners”}

Output : 
CodeFirstGirls best for CodeFirstGirls.

Explanation: 
“girls” word is replaced by lookup value.
*/

testStr = "CodeFirstGirls best for girls"

console.log("The original string is : " + String(testStr))

lookupObj = { "best": "good and better", "girls": "all keen learners" }

temp = testStr.split(' ')
res = []
for (const wrd of temp) {
  res.push(lookupObj[wrd] || wrd)
}

res = res.join(' ')

// console.log("Replaced Strings : " + String(res))
