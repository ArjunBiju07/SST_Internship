//sum of digits
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the number:",(a)=>{
    var num=parseInt(a);

    let res=0;
    let n=num;

    while(n>0){
        res=res+n%10;
        n=parseInt(n/10);

    }
    console.log("sum is ",res);

    readline.close();








});