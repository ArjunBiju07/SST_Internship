const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the number: ",(a)=>{

    let num=parseInt(a);
    
    for(i=1;num>=i;i++){
        if(i%2==0){
            console.log(i);
        }
    }
   

       readline.close(); 
    
});
