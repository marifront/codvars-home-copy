function century(year) {
    console.log(Math.ceil(year/100))
}

century(2022)


// function century(year) {
//     let count = 0;
//     while(year > 0) {
//       year -=100;
//       count++;
//     }
//   return count;
// }