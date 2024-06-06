const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter temperature in celsius: ",(a)=>{

    let cel=parseFloat(a);
    
    let fah=cel*9/5+32;

    console.log("Fahrenheit is ",fah);
    readline.close();



});