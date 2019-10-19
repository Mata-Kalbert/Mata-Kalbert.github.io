const student = {
    name: 'Lucia',
    age: '30',
    location: 'Utah'
}

// Turn object into string
const myObjStr = JSON.stringify(student);

// Print to console
console.log(myObjStr);

// Turn object into object and print to console
console.log(JSON.parse(myObjStr));

// Can be used on arrays
const myArr = ['bacon', 'letuce', 'tomatoes'];

const myArrStr = JSON.stringify(myArr);

console.log(myArrStr);
// "["bacon","letuce","tomatoes"]"

console.log(JSON.parse(myArrStr));
// ["bacon","letuce","tomatoes"]

// Reviver Function on parse
JSON.parse(myObjStr, (key, value) => {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  });

// Replacer function on stringify
const user = {
    id: 229,
    name: 'John',
    email: 'john@awesome.com'
  };
  
  function replacer(key, value) {
    console.log(typeof value);
    if (key === 'email') {
      return undefined;
    }
    return value;
  }
  
  const userStr = JSON.stringify(user, replacer);
  // "{"id":229,"name":"John"}"

  // Spacer function on stringify
  const user2 = {
    name: 'John',
    email: 'john@awesome.com',
    plan: 'Pro'
  };
  
  const user2Str = JSON.stringify(user2, null, '...');
  // "{
  // ..."name": "John",
  // ..."email": "john@awesome.com",
  // ..."plan": "Pro"
  // }"