// level {2}

const removeEvenNumber = (data) => {
    const newArray = data.filter(number => number %2 != 0);

    return newArray;
}

const oddArray = removeEvenNumber([1, 3, 4, 6, 7, 8])
console.log(oddArray);


// 2. Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'
// ```
// ```
// Output should be string: 'ElIE'


const vowelsToUpperCase = (data) => {
var newData = [];
    const length = data.length;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(var i =0; i<length; i++){
        const find = vowels.find(element => element === data[i])
        if(find){
            newData.push(data[i].toUpperCase())
        }
        else{
            newData.push(data[i])
        }
    }
    newData = newData.toString();
    
    return newData;

}

const newString = vowelsToUpperCase('Elie')
console.log(newString);


const findMaxNumber = (data) => {
    const maxNumber = Math.max(...data)

    return maxNumber;
}

const maxNumber = findMaxNumber([1, 3, 4, 6, 7, 8])
console.log(maxNumber);