function insertDash(num) {
    let numStr = num.toString();
    let isOdd = num => num%2 !==0;
    let newStr = ''
        for(let i = 0; i< numStr.length; i++ ) {
        if(isOdd(numStr[i]) && isOdd(numStr[i+1]) && numStr[i+1]!==numStr.legth) {
            newStr+= (numStr[i] + '-')
        
        } else {
            newStr+=numStr[i]
        }
        }
    console.log(newStr)
    }

insertDash(454793);