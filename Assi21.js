const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter a Decimel value: ",(a)=>{

    function num(x){
        let n1=parseInt(x)
        return n1;

    }

    let inte=num(a);
    console.log("Integer is:",inte);
    readline.close();
});