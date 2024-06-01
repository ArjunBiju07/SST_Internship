const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter a number ",(input)=>{
    let number= parseFloat(input);

    console.log("Initial number is "+number);

    // post increment
    console.log("Number++",++number);
    readline.close();
    
    
});
