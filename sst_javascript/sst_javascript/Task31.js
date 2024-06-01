let x=12345;
let val=0;


function sum(x){
    while(x>0){
        
        val=val+ x%10;
        x=parseInt(x/10);
        
        
    }
    console.log("The sum is:",val);

    
   
}
sum(x);