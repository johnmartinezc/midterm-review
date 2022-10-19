function crossArray(array1, array2){
     array1 = [5, 7, 14, 5];
     array2 = [6, 2, 22, 1];
    let resultArray = []
    for(let i = 0; i < array2.length; i++){
        resultArray.push(array1[i])
        resultArray.push(array2[i])

    }
    return resultArray
}

console.log( crossArray())


function foundCat(catArray,noCatArray){
   
for(let i = 0; i < catArray.length;i++){
    if(catArray[i] === 'cat'){
        return true
    }
}
return false
}

    catArray = ["dog", "bear", "cheese", "cat", "fox"];
    noCatArray = ["hi", "bye", "why", "try"];
console.log(foundCat(catArray))
console.log(foundCat(noCatArray))

function oddOnesOut(nums){
  let noOoneArray = []
    for(let i = 0; i < nums.length;i++){
        if(nums[i] !== 1){
            noOoneArray.push(nums[i])
        }
    }
return noOoneArray
}
console.log(oddOnesOut([2,1,3,4,1,43,1,3,1,1,1,3,2,1]))

function stringSpace(str){
    let newStr = ""
    for(let i =0; i < str.length;i++){
        newStr =  newStr  + str[i] + " "
    }
    return newStr.substring(0,newStr.length-1)
}
console.log(stringSpace('string'))
console.log(stringSpace('string').length)
console.log(stringSpace('wow'))
console.log(stringSpace('wow').length)
console.log(stringSpace('hello world'))
console.log(stringSpace('hello world').length)

function stringCompareCounter(str1, str2){
    let count = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            count++
        }
        
    }
    return count
}

console.log(stringCompareCounter('cat','cow'))
console.log(stringCompareCounter('count','touch'))
console.log(stringCompareCounter('well','sell'))


function duplicate(array){
    let seen = []
    for (let i = 0; i < array.length; i++) {
        if(seen.includes(array[i])){
            return true
        }else if (seen.includes(array[i]) !== true){
            seen.push(array[i])
        }
        
    }
    return false
}
console.log(duplicate(['hi', 'wow', 'hey', 'hi']))
console.log(duplicate(['one', 'two', 'three']))
console.log(duplicate([1,7,32,1,10,2,11]))


function damageCalculator(character1, character2){
    let dmg = character1.atk - character2.def
    if(dmg <= 0){
        return 'NO DAMAGE!'
    
    }
    return dmg
}



let character1 = {
    name: 'Cloud',
    atk: 100,
    def: 150
  }
  
  let character2 = {
    name: 'Sephiroth',
    atk: 150,
    def: 50
  }
  console.log(damageCalculator(character1, character2))
  console.log(damageCalculator(character2, character1))