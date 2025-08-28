for (let num = 1; num <=20 ; num++){
    let isPrime = true;

    for(let divisor = 2; divisor < num; divisor++){
        if(num % divisor == 0){
            isPrime = false;
            break;
        }
        
    }
    if (isPrime){
        console.log(`prime number: ${num}`);
    }
}

/* 
 == : value equality
 === : strict comparison with value and type
*/
if ("10" === 10) {
    console.log("Same")
} else {
    console.log("different")
}