//Different ways to check for anagram

// --------------method 1--------------------
// let anagramCheck = (str1, str2) => {
//   if(str1.length != str2.length){
//     return false
//   }

//   let arr1 = str1.split("").sort().join("")
//   let arr2 = str2.split("").sort().join("")

//   if(arr1 == arr2){
//     return true
//   }
//   return false
// }

// --------------method 2--------------------
let anagramCheck = (str1, str2) => {
  if(str1.length !== str2.length){
    return false
  }

  let obj = {}

  for(let char of str1){
    if(obj[char]){
      obj[char] +=1
    } else {
      obj[char] = 1
    }
  }

  for(let char of str2){
    //if obj doesn't have the letter or letter is zero it will return false
    if(!obj[char]){
      return false
    } else {
      obj[char] -= 1
    }
  }
  return true
}

// --------------method 3--------------------
// let anagramCheck = (str1, str2) => {
  
//   if(str1.length != str2.length){
//     return false
//   }

//   let obj1 = {}
//   let obj2 = {}

//   for(let char of str1){
//     if(obj1[char]){
//       obj1[char] += 1
//     } else {
//       obj1[char]= 1
//     }
//   }

//   for(let char of str2){
//     if(obj2[char]){
//       obj2[char] += 1
//     } else {
//       obj2[char]= 1
//     }
//   }

//   for(let key in obj1){
//     if(obj1[key] !== obj2[key]){
//       return false
//     }
//   }
//   return true
// }

// --------------method 4--------------------
// let anagramCheck = (str1, str2) => {
//   if(str1.length != str2.length){
//     return false
//   }

//   let arr1 = str1.split("")
//   let arr2 = str2.split("")

//   for(let i = 0; i < arr1.length; i++){
//     let index = arr2.indexOf(`${arr1[i]}`)
//     if(index == -1){
//       return false
//     } else {
//       arr2.splice(`${index}`, 1)
//     }
//   }
//   return true
// }

console.log(anagramCheck('abc', 'cba')) //true
console.log(anagramCheck('ddvia', 'david')) //true
console.log(anagramCheck('thisistrue', 'tehuirstis')) //true
console.log(anagramCheck('aac', 'aab')) //false
console.log(anagramCheck('dbvia', 'david')) //false
console.log(anagramCheck('thisisfalse', 'tehsilsesfa')) //true
