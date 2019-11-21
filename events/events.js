function getDate() {
    document.getElementById("date").innerHTML = Date();
}
function alertPage() {
    alert("This is an example of On Load");
}
function changeStyle() {
    article = document.getElementById("article1");
    article.classList.toggle("article1style");
}
function styleBack() {
    article1 = document.getElementById("article1");
    article.classList.toggle("article1style");
}
function name() {
    var name = document.getElementById("name");
    var namediv = document.getElementById("namedemo");
    namediv.appendChild('Hello ' + name + '!');
}
function color() {
    document.getElementById("touch").style.color = "blue";
}
var message = document.getElementById("message");
message.addEventListener("click", messageText);
function messageText() {
    document.getElementById("text").innerHTML += "Thanks";
}
var article3 = document.getElementById("article3");
article3.addEventListener("mousemove", blueColor);
function blueColor() {
    article3.style.color = "blue";
}
function startAnimation() {
    document.getElementById("square").style.animation = "fastermove 1s infinite";
}
document.getElementById("square2").addEventListener("webkitTransitionEnd", transition);
document.getElementById("square2").addEventListener("transitionend", transition);
function transition() {
    this.style.backgroundColor = "pink";
}