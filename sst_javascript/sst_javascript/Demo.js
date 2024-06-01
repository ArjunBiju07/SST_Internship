//Multiplication table

const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the number to print its multiplication table: ",(a)=>{
    
    function table(a){
    for(let i=1;i<10;i++){

       let res=i*a;
       console.log(i,"*",a,"=",res);

    }

    }
    table(a);
    readline.close();
});