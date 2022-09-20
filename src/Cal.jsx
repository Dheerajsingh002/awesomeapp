function add(a,b){
    let sum=a+b;
    return 'sum of two number is '+sum;
}
function sub(a,b){
    let sum=a-b;
    return 'subtraction of two number is '+sum;
}
function div(a,b){
    let sum=a/b;
    // div=div.toFixed(2);
    return 'Division of two number is '+sum;
}
function mult(a,b){
    let sum=a*b;
    return 'multiplication of two number is '+sum;
}
export {add,sub,div,mult}