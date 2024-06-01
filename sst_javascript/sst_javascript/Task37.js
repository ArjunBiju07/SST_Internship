const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the number:",(a)=>{
    function sqre(x){
        let sqr=x*x;
        return sqr;
    }
    let ans=sqre(a);
    console.log(ans);
    readline.close();
})