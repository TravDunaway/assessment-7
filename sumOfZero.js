function addingToZero(arrayOfNumbers){
    for(let i = 1; i < arrayOfNumbers.length; i++ ){
        arrayOfNumbers.forEach(element => {
            if(arrayOfNumbers[i] + element === 0 ){ return false

            } else if (arrayOfNumbers[i] + element !== 0){ 
                return true
            }
        });




    }
} console.log(addingToZero([1, 2, 3, 4, 5]))


function sumAdd(array){
    let arrayTwo = array
array.forEach(element => {
    arrayTwo.forEach(element2 => {
        if(element + element2 === 0){return false} else if(element + element2 !== 0){return true}
    });
})


}; console.log(sumAdd([1, 2, 3]))


function sumAdd(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            console.log(array[i] + array[j])
            if(array[i] + array[j] === 0 && array[i] !== array[k]){return true}
            else {return false}
        }
    }

}; console.log(sumAdd([1, 2, 3, 5, -2, 0]))
console.log(sumAdd([1, 2, 3, 5, 0]))
O(n)

function uniqueCharacters(singleWord){
    let newSingleWord =
    singleWord.split('')
    console.log(typeof(newSingleWord))
   for (let i = 0; i < newSingleWord.length; i++){
    for (let j = 1; j < newSingleWord.length; j++){
        if(newSingleWord[i] === newSingleWord[j]){return
false
        } else if ((newSingleWord[i] !== newSingleWord[j])){return true}
    }
   }
} console.log(uniqueCharacters('sss'))

O(n)

function allLetters(str){
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let c of str.toLowerCase()){
        alpha.delete(c)
        if (alpha.size == 0) return true
    }
    return false
}

let text = "hello my name if gunther"
let text2 = "The quick brown fox jumps over the lazy dog"

console.log(allLetters(text))
console.log(allLetters(text2))

O(n)

function findLongestWord(str) {
   
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i].length;
       }
    }
    return longestWord
} 
console.log(findLongestWord('the quick brown fox jumped allllllldddddaayyyy'))

O(n)