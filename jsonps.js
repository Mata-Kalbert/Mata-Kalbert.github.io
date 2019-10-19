var menu = '{"breakfast":"pancakes", "lunch":"Burger","dinner":"Pasta"}';

// Convert into object 
var dataObject = JSON.parse(menu);
// Print example
document.getElementById("parse").innerHTML = "For breakfast we are having " + dataObject.breakfast + ". For dinner we are having " + dataObject.dinner + "."

// Turn object into string
var dataString = JSON.stringify(dataObject);
// Print example
document.getElementById("stringify").innerHTML = dataString;
 
// Reviver Function on parse
var reviverObj = JSON.parse(menu, (key, value) => {
    if ( key === 'breakfast') 
      return value.toUpperCase();
    return value;
  });
document.getElementById("reviver").innerHTML = reviverObj.breakfast;

// Replacer function on stringify, will ignore breakfast 
function replacer(key, value) {
    console.log(typeof value);
    if (key === 'breakfast') {
      return undefined;
    }
    return value;
  }
  
var userStr = JSON.stringify(dataObject, replacer);
document.getElementById("replacer").innerHTML = userStr;


// Spacer function on stringify
var spaces = JSON.stringify(dataObject, null, '...');
document.getElementById("spaces").innerHTML = spaces;