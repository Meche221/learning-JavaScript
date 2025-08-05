// let numbers = [1, 2, 10, 4, 8, 6, 5 ,7, 3, 9];

// // numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
// console.log(numbers);



//example 2

const people = [{name: "ram", age: 16},
                {name: "shyam", age: 17},
                {name: "sita", age: 21},
                {name: "hari", age: 12}]

// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => b.age - a.age); // for reverse order

people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people);
