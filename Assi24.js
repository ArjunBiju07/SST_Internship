//Odd or even using Arrow function
const check=(x)=>{
    if(x%2==0){
        let res=x+' Is a Even number'
        return res;
    }
    else{
        let res=x+' Is a Odd number'
        return res;
    }
};
let y=check(2);
console.log(y);
