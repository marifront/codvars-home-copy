// 1
function maskify(numberCard) {
    return numberCard.slice(-4).padStart(numberCard.length, '#')
}

maskify('234567');

// 2
// function maskify(numberCard) {
//     let str1 = '';
//     let str2 = '';
//     for(let i = 0; i<numberCard.length; i++) {
//         if(i < numberCard.length - 4) {
//             str1 += '#'
           
//         } else {
//             str2 +=numberCard[i]
//         }
        
//     }
//     return str1 + str2
// }

// maskify('234567444');
