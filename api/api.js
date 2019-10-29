// Local Storage
if (typeof(Storage) !== "undefined") {
    localStorage.setItem("name", " Kalbert Mata");
    document.getElementById("resultlocal").innerHTML = localStorage.getItem("name");
  } else {
    document.getElementById("resultlocal").innerHTML = "Sorry, your browser does not support Web Storage...";
  }

 // Session storage 
  if (typeof(Storage) !== "undefine") {
    localStorage.setItem("state", " Utah");
    document.getElementById("resultsession").innerHTML = localStorage.getItem("state");
  } else {
    document.getElementById("resultsession").innerHTML = "Sorry, your browser does not support Web Storage...";
  }