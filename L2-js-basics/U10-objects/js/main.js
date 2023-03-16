// Make an empty object.
const myObj = {}

// Make a property for your object that can be accessed with a dot notation. Get the value of this property.
myObj.prop1 = 'this is the 1st property'
console.log(myObj.prop1)

// Make a property for your object that can only be accessed with the bracket notation. Get the value of this property.
myObj['2nd property'] = 'this is the 2nd property'
myObj['property 3'] = 'this is the 3rd property'
// console.log(myObj.2nd property) // Uncaught SyntaxError: missing ) after argument list
console.log(myObj["2nd property"])
// console.log(myObj.property 3); // Uncaught SyntaxError: missing ) after argument list
console.log(myObj["property 3"])

// Set the value of a property with the dot notation.
myObj.prop1 = '1st property is this'
console.log(myObj.prop1);

// Set the value of a property with the square bracket notation.
myObj['2nd property'] = '2nd property is this'
console.log(myObj['2nd property'])

// Make a method. Call this method.
myObj.someMethod = function () {
    console.log('This is a method.')
}
myObj.someMethod()
console.log(myObj)

// Make a method that takes in an argument. Call this method.
myObj.methodWithParam = (param1) => {
    console.log('My name is ', param1)
}
myObj.methodWithParam('Mohak')