try {
    document.getElementById("welcome").onclick = function() {
        location.href = "welcome.html";
    };
    document.getElementById("form").onclick = function() {
        location.href = "signup.html"
    }
    document.getElementById("return").onclick = function() {
        location.href = "index.html";
    }

} catch (error) {
    console.log(error);
}