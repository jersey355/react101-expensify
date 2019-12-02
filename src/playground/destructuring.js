// OBJECT DESTRUCTURING ---------------------------------------

// const person = {
//     //name: 'Ed',
//     age: 44,
//     location: {
//         city: 'Orlando',
//         temp: 70
//     }
// };

// // destructuring with default value and renamed property
// const { name: firstName = 'Unknown', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Acme Books' } = book.publisher;
// console.log(publisherName);

// ARRAY DESTRUCTURING -------------------------------------

const address = ['11912 Atumn Fern Ln', 'Orlando', 'FL', '32827'];

// note that destructuring is based on array index
const [, city, state, zip = '00000'] = address;
console.log(`You are in ${city}, ${state}, ${zip}`);

// challenge:
const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}`);
