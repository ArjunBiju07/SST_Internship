//print string and integer
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter a string:",(a)=>{
    readline.question("Enter a integer: ",(b)=>{
        be=parseInt(b);

        function read() {
            console.log("You entered ",a);
            console.log("You entered ",be);
        }
        read();
        readline.close();
    });
});