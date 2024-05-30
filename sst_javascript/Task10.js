const readline = require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the first number:",(x)=>{
// readline.question("Enter second number:",(y)=>{

     const sum= parseInt(x) //+ parseInt(y);
    // var sub = x - y;
    // var mul = x * y;
    // var divi = x / y;
    var mod = x % 10 ;

    // console.log("sum is "+sum);
    // console.log("Differnce is "+sub);
    // console.log("Multiplication is "+mul);
    // console.log("Division is "+divi);
    console.log("Reminder is "+mod);
    readline.close();

});
// });
