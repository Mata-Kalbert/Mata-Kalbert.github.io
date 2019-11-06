// Shapes
var canvas = document.getElementById("canvasdemo");
var rectangle = canvas.getContext("2d");
var border = canvas.getContext("2d");
var circle = canvas.getContext("2d");
// Rectangle
rectangle.fillStyle = "#BB999C";
rectangle.fillRect (0, 0, 230, 150);
// Rectangle Border
border.strokeRect (20, 20, 50, 100);
// Circle
circle.beginPath();
circle.arc(125, 50, 40, 0, 2 * Math.PI);
circle.stroke();
// Gradient
var canvas2 = document.getElementById("canvasdemo2");
var rectangle2 = canvas2.getContext("2d");
var grd = rectangle2.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "#485284");
grd.addColorStop(1, "#9999C3");
rectangle2.fillStyle = grd;
rectangle2.fillRect(20, 20, 200, 150);
// Text 
var canvas3 = document.getElementById("canvasdemo3");
var text = canvas3.getContext("2d");
text.font = "100px Arial";
text.strokeText("Hello!", 50, 80);
text.textAlign = "center";
