
//ordem crescente

/*
for(let secondIndex = 1; secondIndex < numbers.length; secondIndex += 1){
    for(let index = 0; index < numbers.length - 1; index += 1) {
        if(numbers[index] > numbers[secondIndex]) {
            let aux = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = aux;
        } 
    
    }   
}
*/

/*
//vai comparando com as primeiras posições
for (let secondIndex = 1; secondIndex < numbers.length; secondIndex += 1) {
    for (let index = 0; index < secondIndex; index += 1) {
        if(numbers[index] > numbers[secondIndex]) {
            let aux = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = aux;
        } 
    }
}


console.log(numbers);
*/

//bubble sort
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let replayIndex = 0; replayIndex < numbers.length - 1; replayIndex += 1) {
    //console.log("replay numero: ", replayIndex )
    for(let index = 0; index < numbers.length - replayIndex; index += 1) { //numbers.length - replayIndex -> vai "travando" os ultimos números
        //console.log("iteração numero: ", index)
        if(numbers[index] > numbers[index + 1]){
            let biggerNumber = numbers[index];
            let smallerNumber = numbers[index + 1];
            numbers[index] = smallerNumber;
            numbers[index + 1] = biggerNumber; 
            
        }
    }
}
console.log(numbers)
