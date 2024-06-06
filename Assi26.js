const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter your name: ",(a)=>{
    readline.question("Enter your Roll number: ",(b)=>{
        readline.question("Enter your age: ",(c)=>{
            readline.question("Enter your class: ",(d)=>{

                const Object={
                    name:a,
                    roll:b,
                    age:c,
                    class:d,

                    details:function(){
                        console.log("\nName: "+Object.name);
                        console.log("Roll number: "+Object.roll);
                        console.log("Age: "+Object.age);
                        console.log("Class: "+Object.class);

                    }
                    
                };
                Object.details();
                readline.close();
            });
        });
    });
});
