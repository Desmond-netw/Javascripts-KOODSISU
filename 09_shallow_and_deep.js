// Create a JavaScript file which does nothing when executed with Node.js. It should contain the following 2 objects:

const Person =  {
  name: "John Doe",
  age: 30,
  city: "New York",
  hobbies: [
    "reading",
    "cooking",
    "hiking",
  ],
  address: {
    street: "123 Main Street",
    zipCode: "10001",
  },
}

//  shallow copy of the person object 
// 1. using the spread operator to create a shallow copy of the person object.
// shallow copy means the new copy will have same properties of the original object.
const shallowCopy = {...Person};

// deep copy of the person object
//  using JSON.parse and JSON.stringify to create a deep copy.

const deepCopy = JSON.parse(JSON.stringify(Person));

// step two: modify the original object
Person.name = "Emmanuel Odame";
Person.hobbies.push("fishing");
Person.address.street = "00400 Independence Avenue";

// step three: log the variables
console.log("Original Person:", Person);
console.log("Shallow copy:", shallowCopy);
console.log("Deep copy:", deepCopy);