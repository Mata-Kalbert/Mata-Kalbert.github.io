function showRed() {
    document.getElementById("red").style.color = "pink";
}
function createP() {
    var p = document.createElement("p");
    p.innerHTML = "We believe that men will be punished for their own sins, and not for Adam’s transgression.";
    var div = document.getElementById("paragraph");
    div.appendChild(p);
}
function addButton() {
    var button = document.createElement("button");
    button.innerHTML = "New button!";
    var div2 = document.getElementById("button");
    div2.appendChild(button);
}
function moveText() {
    var text = document.getElementById("text");
    var newPlace = document.getElementById("newPlace");
    newPlace.appendChild(text);
}
function addP() {
    var article = document.getElementById("article4");
    var container = document.getElementById("container");
    var title = document.getElementById("article4Title");
    container.insertBefore(title, article);
}
function remove() {
    var title2 = document.getElementById("article5Title");
    var fifthDiv = document.getElementById("fifthDiv");
    fifthDiv.removeChild(title2);
}
function replace() {
    var titlea = document.getElementById("title6a");
    var titleb = document.getElementById("title6b");
    var sixDiv = document.getElementById("sixDiv");
    sixDiv.replaceChild(titleb, titlea);
}