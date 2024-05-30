const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the base: ",(a)=>{
readline.question("Enter the height: ",(b)=>{

    let s1=parseInt(a);
    let s2=parseInt(b);
    let area=(s1*s2)/2;

    console.log("Area of the triangle is=",area);     

    readline.close();
});    
});