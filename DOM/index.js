// document.title ="My website";
// document.body.style.backgroundColor = "hsl(0, 0%, 20%)"


// console.log(document);


const username = "Binay Meche";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? " " + `Guest` : " " + username