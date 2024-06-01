const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter your name: ",(a)=>{
    readline.question("Enter your age: ",(b)=>{

        function your(){
             console.log("Your name is "+a+","+"Your age is "+b);
             
        }
        your();
        readline.close();
    });
});

