// try {
//     console.log("hello");
    
// } 
// catch(error) {
//     console.error(error);
// }
// finally{
//     console.log("This always executes")
// }
// console.log("hey how are you");



try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error ("You can't divide with 0 (Zero)!")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error ("Strings are not allowed!")
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error)
}
11
console.log("You have reached the end!");
