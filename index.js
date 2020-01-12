//Different ways to check for anagram

let anagramCheck = (str1, str2) => {
  if(str1.length != str2.length){
    return false
  }

  let arr1 = str1.split("")
  let arr2 = str2.split("")

  for(let i = 0; i < arr1.length; i++){
    let index = arr2.indexOf(`${arr1[i]}`)
    if(index == -1){
      return false
    } else {
      arr2.splice(`${index}`, 1)
    }
  }
  return true
}

console.log(anagramCheck('abc', 'cba')) //true
console.log(anagramCheck('ddvia', 'david')) //true
console.log(anagramCheck('thisistrue', 'tehuirstis')) //true
console.log(anagramCheck('aac', 'aab')) //false
console.log(anagramCheck('dbvia', 'david')) //false
console.log(anagramCheck('thisisfalse', 'tehsilsesfa')) //true
