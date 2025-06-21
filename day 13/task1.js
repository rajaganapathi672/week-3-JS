let fruits=["apple","banana",'cherry','orange','melon'];
console.log(fruits[3])
fruits.push('pineapple')
console.log(fruits)
fruits.shift()
console.log(fruits)
console.log(fruits.length)
console.log(fruits.reverse())
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}
function sumArray(arr) {
  return arr.reduce((total, value) => total + value, 0);
}
const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log(totalSum); 