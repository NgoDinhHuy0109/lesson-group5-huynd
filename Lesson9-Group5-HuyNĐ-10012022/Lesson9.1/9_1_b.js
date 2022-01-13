function checkAge(age){
    return(age>18) || false ;
}
let numAge= parseInt(prompt("Nhập vào số tuổi của bạn :"));
switch(checkAge(numAge)){
    case true:
        document.getElementById("result-view").innerHTML ="Bạn đủ 18 tuổi. Chào mừng bạn!";
        console.log("Bạn đủ 18 tuổi. Chào mừng bạn!");
        break;
    case false:
        document.getElementById("result-view").innerHTML ="Bạn chưa đủ 18 tuổi.";
        console.log("Bạn chưa đủ 18 tuổi.");
        break;
}