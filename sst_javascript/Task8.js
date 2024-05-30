const arjun = require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,

});

arjun.question("Who are you?\n",(name)=>{
arjun.question("How old are you?\n",(age)=>{
    

    console.log("Hey there "+name+"!");
    console.log("Your age is "+age+"!");
    arjun.close();

});
});
