const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the radius:",(r)=>{

    function radius(x){
        let rad=Math.PI*Math.pow(r,2);
        return rad;
    }

    let area=radius(r);
    console.log("Area is:",area);
    readline.close();
});