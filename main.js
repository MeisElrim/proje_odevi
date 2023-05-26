function logIn() {
    var userName = document.getElementById("un").value;
    var password = document.getElementById("pa").value;

    if (userName == "meys.isaelhatib@sakarya.edu.tr" && password == "g211210577") {
        window.open("index.html");
    } else {
        alert("Not Correct")
    }
}
