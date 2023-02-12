// let product = {
//     title: 'Milk',
//     price: 44,
//     quantity: 4,
//     manufacturer: {
//         title: 'Obolon',
//         city: 'Lviv',
//         zip: 7327238,
//         coservants: [
//             {id: 'b12', status: 3},
//             {id: 'h7', status: 9},
//             {id: 'g12', status: 99}
//         ]
//     },
//
// }
//
// console.log (product.price);
// console.log (product.manufacturer.title);
// console.log (product.manufacturer.coservants[2].id);


let x = null // -> {name: Susanne, height: 150}

let keep = 19999 + ''; // string
console.log (keep);
console.log (x);
console.log (typeof NaN);

let tar = '1000.12';// string
let tar1 = +'1000';// number
console.log (tar);
console.log (tar1);

console.log (parseInt (tar));

console.log (parseFloat (tar));


console.log (!!12);// true
console.log (!!null); // false
console.log (!!undefined);// false
console.log (!!NaN);// false


let msg = 'Hello';
document.write ('<div>' + msg + '</div>');


document.write (`<div>${msg}</div>`);