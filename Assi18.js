// *
// **
// ***
// ****
// *****

const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the symbol: ",(a)=>{
    for(let i=1;i<=5;i++){
        let star='';
        for(let j=0;j<i;j++){
            
            star=star+a;
            
        }
        console.log(star);
    }

        
    readline.close();
    
});