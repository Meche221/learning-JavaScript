const newH1 = document.createElement("h1");

newH1.textContent = "I like Pizza";
newH1.id = "myH1";
newH1.style.color = "red"

// document.body.append(newH1);
document.body.prepend(newH1);