const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the length of the rectangle: ",(a)=>{
    readline.question("Enter the breadth of the rectangle: ",(b)=>{

        n1=parseInt(a);
        n2=parseInt(b);

        function area(x,y){
            let rect=x*y;
            console.log("The area of the rectangle is: ",rect);
        }

        area(n1,n2);
        readline.close();
    });
});