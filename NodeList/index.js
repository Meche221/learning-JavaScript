let myButtons = document.querySelectorAll(".mybuttons");

// myButtons.forEach(element => {
//     element.style.backgroundColor = "green";
//     element.textContent += "😉";
// })


// myButtons.forEach(element => {
//     element.addEventListener("click", event => {
//         event.target.style.backgroundColor = "yellow";
//     })
// })


// myButtons.forEach(element => {
//     element.addEventListener("mouseenter", event =>{
//         event.target.style.backgroundColor = "green";
//     })
// })

// myButtons.forEach(element => {
//     element.addEventListener("mouseleave", event =>{
//         event.target.style.backgroundColor = "blue";
//     })
// })


const newButton = document.createElement("button");
newButton.textContent = "button5";
newButton.classList = "mybuttons";
document.body.appendChild(newButton);



myButtons = document.querySelectorAll(".mybuttons") 

console.log(myButtons);
