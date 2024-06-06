const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the numbers: ",(a)=>{
        
        for(i of a ){
            console.log(i);
        }
        readline.close();
        
    });
