// Count how many even numbers are in an array ;


let array = [10,30,3,2,4,7,8];
let i=0;
let count=0;
let evenNumber = []
while(i<array.length){
    if(array[i]%2==0){
        count++
        evenNumber.push(array[i])
    }
    i++
}
console.log(count,evenNumber);
