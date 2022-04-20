// // var elements = document.getElementById('a').innerText;
// let search = prompt('utga oruulna uu').toLowerCase()
// let arr= elements.split(' ');
// let arr1 = arr.map(elements => {
//     return elements.toLowerCase();
// }) ;
// let sort = arr1.sort();
// console.log(sort)
// for(x of arr1){
//     if (arr1.includes(search) )
//     {
//         let index = arr1.indexOf(search)
//         console.log(`${index} -r indext baina ` )

//     }else{
//         console.log('alga')
//     }
// }
// // arr.push(elements)тэрбээр,
// // console.log(arr[i]);
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
console.log(attachRmbtn(e));
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
