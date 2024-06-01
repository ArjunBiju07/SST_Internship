const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the number to find sum of digits: ",(a)=>{
    n1=parseInt(a);
    let val=0;

    function sum(n1){
        while(n1>0){
        val=val+n1%10;
        n1=parseInt(n1/10);
        
        }
        console.log("The sum of all digits is: ",val);


    }
    sum(n1);

    readline.close();
});