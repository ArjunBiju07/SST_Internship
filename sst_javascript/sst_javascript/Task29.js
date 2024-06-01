const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the first number: ",(a)=>{
    readline.question("Enter the second number: ",(b)=>{

        n1=parseInt(a);
        n2=parseInt(b);

        function product(x,y){
            let pro=(x*y);
            console.log(pro);
        }

        product(n1,n2);
        readline.close();
    });
});