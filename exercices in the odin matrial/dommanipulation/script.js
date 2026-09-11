const redText = document.createElement("p");
const blueText = document.createElement("h3");
const div = document.createElement("div");
const childH = document.createElement("h1");
const childP = document.createElement("p");

redText.innerText="Hey I'm red!";
redText.style.color= "red";

blueText.innerText="I'm a blue h3!";
blueText.style.color="blue";

div.style.backgroundColor="pink";
div.style.border="2px solid black";
    childH.innerText="I'm in a div";
    childP.innerText="ME TOO!"
//the order of appending matters and this is the
//correct order
div.appendChild(childH);
div.appendChild(childP);

document.body.appendChild(redText);
document.body.appendChild(blueText);
document.body.appendChild(div);
btn.addEventListener("click", function (e) {
  console.log(e);
});
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
