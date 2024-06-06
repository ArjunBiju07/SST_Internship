const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter a string: ",(a)=>{
    readline.question("Enter the same string: ",(b)=>{

        if(a==b){
            console.log("string are equal");
        }
        else{
            console.log("String are not equal");
        }

        readline.close();

    });
});