const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];


// fruits.forEach(fruits => console.log(fruits.calories)); // //for each method



// //map() method

// const fruitName = fruits.map(fruit => fruit.name);
// console.log(fruitName);



//all sorta things work for eg: forEach, reduce, map, filter, push, pop, etc.



//reduce
const maxFruit = fruits.reduce((max, fruit) => 
                                        fruit.calories > max.calories ?
                                        fruit : max);

const minFruit = fruits.reduce((min, fruit) =>
                                        fruit.calories < min.calories ?
                                        fruit : min);
                                        
console.log(maxFruit.name);
console.log(maxFruit.calories);
console.log(minFruit.name);
console.log(minFruit.calories);

