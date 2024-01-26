
const tage = document.querySelector(".tag").innerHTML
const tag = document.querySelector(".tag").textContent
console.log(tage,"innerHTML");
console.log(tag,"textContent");

const busket = []
let messgae = "fill name"
const add = () => {
  let name = document.querySelector(".name").value
  if (!name) {
    alert(messgae)
  } else {
    busket.push(name)
    const ulContainer = document.querySelector(".ul")
    const li = document.createElement("li")
    for (const item of busket) {
      li.textContent = item
      ulContainer.appendChild(li)
    }
    document.querySelector(".name").value = ""
  }


}

1//for of loop

// for(const item of busket){
//    console.log(item);
// }

// ------------------------------------------
2// for loop

// for (let index = 0; index < busket.length; index++) {
//   const element = busket[index];
//   console.log(element);

// }


// --------------------------------------------------
3// forEach loop

// busket.forEach(function (element,i) {
//   console.log(element,i);
// })


// ----------------------------------------------
4// map function

// busket.map((doc,i)=>{
// console.log(doc,i);
// })

// --------------------------------------