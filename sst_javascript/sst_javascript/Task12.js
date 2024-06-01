const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter first number:",(num1)=>{
readline.question("Enter second number:",(num2)=>{
    parseInt(num1);
    parseInt(num2);

    console.log("Comparison Operators");
    console.log("Num 1 == Num 2",num1==num2);
    console.log("Num 1 != Num 2",num1!=num2);
    console.log("Num 1 === Num 2",num1===num2);
    console.log("Num 1 !== Num 2",num1!==num2);
    console.log("Num 1 > Num 2",num1>num2);
    console.log("Num 1 < Num 2",num1<num2);
    console.log("Num 1 >= Num 2",num1>=num2);
    console.log("Num 1 <= Num 2",num1<=num2);


  readline.close();  
});
});
