//Area of rectangle
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter length: ",(a)=>{
    readline.question("Enter Breadth: ",(b)=>{
        var num1=parseFloat(a);
        var num2=parseFloat(b);

        function area(){
            let x= (num1*num2);
            console.log("Area of the triangle: "+x);
        }
        area();

        
        readline.close();
    });
});