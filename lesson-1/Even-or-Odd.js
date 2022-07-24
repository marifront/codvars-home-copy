//1
// function even_or_odd(number) {
//   if(number%2 == 0) {
//       return 'Even'
//   } else {
//       return 'Odd'
//   }
// }

// 

//2
// function even_or_odd(number) {
//     if(number%2 == 0) {
//         return 'Even'
//     }
//     return 'Odd'
// }

//3

const EvenOrOdd = function(num) {
    return num%2 == 0? 'Even': 'Odd';
}
  
  
console.log(EvenOrOdd(4))