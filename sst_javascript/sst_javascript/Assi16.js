//Average
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter first number: ",(a)=>{
    readline.question("Enter second number: ",(b)=>{
        var num1=parseFloat(a);
        var num2=parseFloat(b);

        function average(){
            let x= (num1+num2) / 2;
            console.log("Average: "+x);
        }
        average();

        
        readline.close();
    });
});