function number(num){
    if(num === 0){
        console.log(`the number ${num} is zero`) 
    }else if(num > 0){
        console.log(`the number ${num} is positive`)
    }else{
        console.log(`the number ${num} is negative`)
    }
}

number(10);
number(-5);
number(0);

function grades(num){
    if(num > 90){
        return `A`;
    }else if(num < 90 && num >= 80){
        return `B`;
    }else if(num < 80 && num >=70){
        return `C`;
    }else if(num < 70 && num > 60){
        return `D`;
    }else{
        return `F`;
    }
}
console.log(grades(90)); // A
console.log(grades(89)); // B
console.log(grades(80)); // B
console.log(grades(79)); // C
console.log(grades(70)); // C
console.log(grades(69)); // D
console.log(grades(60)); // D
console.log(grades(59)); // F
console.log(grades(0));  // F


function leapYears(year){
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYears(2024)); // true
console.log(leapYears(2023)); // false
console.log(leapYears(1900)); // false
console.log(leapYears(2000)); // true
console.log(leapYears(2004)); // true
console.log(leapYears(2005)); // false