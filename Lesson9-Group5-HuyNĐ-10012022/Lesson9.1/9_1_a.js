
function checkAge(age){
    return(age>18) ?"Bạn đủ 18 tuổi. Chào mừng bạn!" : "Bạn chưa đủ 18 tuổi" ;
}
let result = checkAge(parseInt(prompt("Hãy nhập tuổi của bạn: ")));

document.getElementById("result-view").innerHTML = result;
console.log(result);