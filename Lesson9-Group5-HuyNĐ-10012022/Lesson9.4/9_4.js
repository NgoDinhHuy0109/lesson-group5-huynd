function checkspace(login){
    let check=0;
    for(let i=0;i < login.length; i++)
    {
        check+= (login[i] !=" ") ? 1 : 0;
    }
    return (check===0) ? true : false ;
}
function checklogin(user){
    if ( user==="Admin"){
        let password=prompt("Vui lòng nhập vào mật khẩu :");
        if(password==="mindX")
        {
            alert("Chào mừng bạn !")
            document.getElementById("result-view").innerHTML=" Chào mừng bạn !";
            console.log("Chào mừng bạn !");
        }
        else if(checkspace(password) === true)
        {
            alert("Đã hủy")
            document.getElementById("result-view").innerHTML=" Đã hủy";
            console.log("Đã hủy");
        }
        else {
            alert("Mật khẩu sai . ")
            document.getElementById("result-view").innerHTML=" Mật khẩu sai .";
            console.log("Mật khẩu sai .");
        }
    }
    else if(checkspace(user) === true)
    {
        alert("Đã hủy")
        document.getElementById("result-view").innerHTML=" Đã hủy";
        console.log("Đã hủy");
    }
    else
    {
        alert("Tôi không biết bạn")
        document.getElementById("result-view").innerHTML=" Tôi không biết bạn";
        console.log("Tôi không biết bạn");
    }
}
let username=prompt("Nhập tên đăng nhập :");
checklogin(username);
