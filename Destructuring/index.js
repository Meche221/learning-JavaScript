// let a = 1;
// let b = 4;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// let c = "magic";
// let d = "black";

// [c, d] = [d, c];
// console.log(c);
// console.log(d);


// const colors = ["red", "blue", "purple", "white", "orange", "yellow", "salmon"];

// const [firstColor, secondColor, thirdColor, fourthColor, lastColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(fourthColor);
// console.log(lastColor);
// console.log(extraColors);




function displayPerson({firstName, lastName, age, job = "unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
    
}

const person1 = {
    firstName: "Binay",
    lastName: "Meche",
    age: 17,
}
const person2 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const{firstName, lastName, age, job = "unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

displayPerson(person2);