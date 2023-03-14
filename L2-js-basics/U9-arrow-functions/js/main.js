// Make a function named ten that takes in zero arguments and return the value 10. Try using both () and _ syntax.
const ten1 = () => 10

const ten2 = _ => 10

ten1()
ten2()

// Make a function named logger that takes in one argument. It logs the argument you passed into it. Try it with and without parenthesis ().
const logger1 = (name) => {
    console.log(name)
}

const logger2 = name => {
    console.log(name)
}

logger1('Mohak')
logger2('Trivedi')

// Make a function called add that adds two numbers together. Try it with and without implicit returns.
const add1 = (num1, num2) => {
    return num1 + num2
}

const add2 = (num1, num2) => num1 + num2

const sum1 = add1(2, 3)
console.log(sum1)
const sum2 = add2(6, 7)
console.log(sum2)

// Make a function called multiply that multiplies two numbers together. Try it with and without implicit returns.
const multiply1 = (num1, num2) => {
    return num1 * num2;
}

const multiply2 = (num1, num2) => num1 * num2;

const prod1 = multiply1(2, 3)
console.log(prod1)
const prod2 = multiply2(5, 7)
console.log(prod2)