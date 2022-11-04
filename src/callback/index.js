const suma = (v1, v2) => v1 + v2;

const calc = (num1, num2, callback) => callback(num1, num2);

console.log(calc(5, 5, suma)); 


///

setTimeout(() => {
    console.log('callback');
}, 2000);


///

const grettings = (name) => console.log( `Hello ${name}`);

setTimeout(grettings, 1000, 'Axl');