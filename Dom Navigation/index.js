// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";



// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElements =>  {
//     const firstChild = ulElements.firstElementChild;
//     firstChild.style.backgroundColor = "yellow"
//     // ulElements.style.backgroundColor = "yellow";
// })




// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// })




// const element = document.getElementById("vegetables");
// const nextString = element.nextElementSibling;

// nextString.style.backgroundColor = "yellow"




// const element = document.getElementById("vegetables");
// const previousString = element.previousElementSibling;

// previousString.style.backgroundColor = "yellow"




// const element = document.getElementById("apple");
// const parentElement = element.parentElement;

// parentElement.style.backgroundColor = "yellow"




const element = document.getElementById("fruits");
const children = element.children;

// children[1].style.backgroundColor = "yellow"
Array.from(children).forEach(children => {
    children.style.backgroundColor = "yellow"
})