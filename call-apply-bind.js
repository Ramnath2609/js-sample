function print(name) {
    return `Hi, I am ${name}, I am ${this.occupation}`;
}

const obj = {
    occupation: 'Fullstack developer'
}

//Invokes a function with a given 'this' value, and accepts arguments one by one.

console.log(print.call(obj, 'Ramnath'));


//Invokes a function with a given 'this' value, and accepts arguments as an array.

console.log(print.apply(obj, ['Ajay']));

//Bind returns a function with a given 'this' value bound to it.

const fn = print.bind(obj);

console.log(fn('Rohit'));