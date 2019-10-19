function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        cFunction(myArr);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
      out += '<a href="' + arr[i].url + '">' + 
      arr[i].display + '</a><br>';
    }
    document.getElementById("demo").innerHTML = '<h2>Disney Movies</h2>' + out;
  }

var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo2").innerHTML =
        this.getResponseHeader("Last-Modified");
    document.getElementById("demo3").innerHTML =
        this.getResponseHeader("Content-Type");
  }
};
xhttp.open("GET", "ajaxlinks.txt", true);
xhttp.send();