function init() {
    const nope = document.getElementById("nope");
    const button = document.getElementById("change-my-life");
    const paragraph = document.getElementById("status");

    
    button.addEventListener("click", function () {
        paragraph.innerHTML = "Tôi giàu sau khi học lập trình tại mindX";
    })

    nope.addEventListener("change", function () {
        nope.style.backgroundColor = "#ff0000";
        nope.style.color = "#ffffff";
    });
    nope.addEventListener("space", function () {
        nope.style.backgroundColor = "";
        nope.style.color = "";
    });
    nope.addEventListener("click", function () {
        if (confirm("Bạn có chắc chắn không muốn thay đổi cuộc dời bạn? ") == true) {
            nope.innerHTML = "Tôi rất tiếc";
        } else {
            nope.innerHTML = "Bạn giàu có!";
        }
    })
}

window.addEventListener("load", init);
 