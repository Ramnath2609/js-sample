function multiplier(a, b, c) {
    return a * b * c;
}

//Function of n arguments is transformed into n functions accepts accepting one or more arguments, called Currying.

function curriedMultiplier(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

console.log('Normal function: ', multiplier(1, 2, 3));

console.log('Curried function: ', curriedMultiplier(1)(2)(3));
