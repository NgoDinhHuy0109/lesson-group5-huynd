function min(a,b){
    if(a>b){
        return `${b} is min `
    }
    else if(a<b){
        return `${a} is min ` 
    }
    else{
        return `a is equal to b`
    }
}
let num1=parseInt(prompt("Nhập vào số thứ 1: "));
let num2=parseInt(prompt("Nhập vào số thứ 2: "));
document.getElementById("result-view").innerHTML =min(num1,num2);
console.log(min(num1,num2));