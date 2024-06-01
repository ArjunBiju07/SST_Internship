const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

        readline.question("Enter your birth year: ",(a)=>{

            const today=new Date();
            var age=today.getFullYear()-a;

            console.log("Your age is:",age);
            readline.close();
        });
  
