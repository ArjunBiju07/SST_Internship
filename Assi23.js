//adding function using callback function

let n1=10;
let n2=20;
let z;

function add(x,y,callback){
    z=(x+y);
    
    callback();
}

function call(){
    console.log("Sum = ",z);
}
add(n1,n2,call);


