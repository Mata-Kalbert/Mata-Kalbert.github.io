// Literal constructor

var pet = {
    species: "cat",
    name: "Tommy",
    age: "2 years old",
    color: "orange",
    // Creates a method of a function
    message: function() {
        return 'Hi my name is ' + this.name;
    }
};

document.getElementById("uno").innerHTML = pet.message();

// Contructor function

function Animal(species, name, age, color) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.color = color;
}

// Instance of object
var mypet = new Animal("dog", "Tommy", "4 years old", "black");
//document.getElementById("pet2").innerHTML = mypet.name;

// Print all the values using a loop
var txt = " ";
var x;

for (x in mypet) {
   txt += mypet[x] + ', ';
}
document.getElementById("dos").innerHTML = txt;

// Methods
// Change to uppercase
document.getElementById("tres").innerHTML = mypet.name.toUpperCase();
// Displays keys
document.getElementById("cuatro").innerHTML = Object.keys(mypet);
// Displays keys and avalues
document.getElementById("cinco").innerHTML = Object.entries(mypet);

//Form

function profile() {
    var name = document.getElementById("firstname").value;
    var city = document.getElementById("city").value;
    var color = document.getElementById("color").value;

    var person = {
        firstname: name,
        city: city,
        color: color,
        message: function() {
            return "Hello " + this.firstname + "! You live in " + this.city + " and your favorite color is " + this.color;}
    };
    
    document.getElementById("person").innerHTML = person.message();
}