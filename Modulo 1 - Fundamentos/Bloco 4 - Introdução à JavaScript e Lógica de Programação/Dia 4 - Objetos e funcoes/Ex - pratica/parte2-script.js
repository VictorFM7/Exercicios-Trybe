/* [COLINHA]
    split() -> divide a string em um array (não é inplace)
    reverse() -> inverte a ordem dos elementos em um array
    join() -> retorna um array como string (não é inplace), se não for passado parametro, separa por virgula
 */

// 1
function isPalindrome (string) {
    let reversedString = string.split('').reverse().join('');
    if(reversedString === string) {
        return true;
    } 
    return false;
}

console.log(isPalindrome("arara"));

// 2 
function maxIndex(array) {
    let maxValue = null;
    let maxValueIndex = null;

    for(let index = 0; index < array.length; index += 1) {
        if(maxValue === null){
            maxValue = array[index];
            maxValueIndex = index;
        } else if (array[index] > maxValue) {
            maxValue = array[index];
            maxValueIndex = index;
        }
    }
    return maxValueIndex;
}
/* [metodo resumido]
function maxIndex(array) {
    let maxValue = Math.max(...array);
    let maxValueIndex = array.indexOf(maxValue);
    return maxValueIndex;
}
*/
let numbers = [2, 3, 6, 7, 10, 1];
console.log(maxIndex(numbers));