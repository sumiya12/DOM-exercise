const headtitle = document.getElementById("#headtitle");
const input = document.querySelector(".input");
const btnRemove = document.querySelector(".btn-remove");
const btnLastRemove = document.querySelector(".btnLastremove");
const btnaddRemove = document.querySelector(".btnaddremove");
const btnAdd = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
// console.log(li)

attachRmbtn = (e) => {
  const newbtn = document.createElement("button");
  newbtn.textContent = "remove";
  newbtn.className = "remove";
e.appendChild(newbtn);
  
};
// console.log(document.appendChild)
// attachRmbtn();
btnAdd.addEventListener("click", (e) => {
  const text = input.value;
  const newEl = document.createElement("li");
  newEl.textContent = text;
  ul.appendChild(newEl);
  attachRmbtn(newEl);
});

// attachRmbtn();

btnRemove.addEventListener("click", () => {
  if (ul.style.display == "none") {
    ul.style.display = "block";
    btnRemove.textContent = "Remove list";
  } else {
    ul.style.display = "none";
    btnRemove.textContent = "Show list";
  }
});
// console.log(headtitle);
btnLastRemove.addEventListener("click", () => {
  ul.removeChild(ul.lastChild);
});
btnaddRemove.addEventListener("click", () => {
  const node = document.createElement("li");
  const textnode = document.createTextNode("a");
  node.prepend(textnode);
  ul.prepend(node);
});