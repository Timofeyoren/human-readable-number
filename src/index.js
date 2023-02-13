module.exports = function toReadable (number) {
  
    let strNumber = number.toString();
    let lengthNumber = number.toString().length;
    let arrTotal = [];
    
    const arrStrNumber = [
        ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
        ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]
    ];
    
    if (number === 0) {
        return "zero";
    } 
    
    for (let i = 1; i <= lengthNumber; i++ ) {
    
        arrTotal.push(arrStrNumber[lengthNumber - i][strNumber[i - 1]]);
    
        if ((lengthNumber === i) && (strNumber[(lengthNumber - 2)] === "1")) {
            arrTotal.splice(-2, 2, arrStrNumber[lengthNumber - i][Number(strNumber[i - 1]) + 10]);
            //arrTotal.push(arrStrNumber[lengthNumber - i][Number(strNumber[i - 1]) + 10]);
        }   
    
    }

    return arrTotal.filter(word => word !== "").join(' ');

}
