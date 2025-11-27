const year = document.getElementById("currentyear")
let product = document.getElementById("product")

const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

if (product !== null){
  for (item of products){
    let option = document.createElement("option")
    option.value = item["id"]
    option.textContent = item["name"]
    product.appendChild(option)
  }
}

let review = document.querySelector(".review");
let thankyou = document.querySelector(".thankyou")

if(review !== null){
  let num = 1;
  document.addEventListener("DOMContentLoaded", () =>{
    const storedCount = localStorage.getItem('formSubmitCount');

    if (storedCount !== null){
      num += parseInt(storedCount);
      localStorage.setItem('formSubmitCount',num.toString());
    } else {
      localStorage.setItem('formSubmitCount', '1');
    }
    thankyou.innerHTML = `Thank you!  You have submitted ${num} review(s).`;
  })

  

  for (item of products){
    let tr = document.createElement("tr");
    let td0 = document.createElement("td");
    td0.textContent = item["id"];
    let td1 = document.createElement("td");
    td1.textContent = item["name"];
    let td2 = document.createElement("td");
    td2.textContent = item["averagerating"];
    tr.appendChild(td0)
    tr.appendChild(td1)
    tr.appendChild(td2)
    review.appendChild(tr)
  }
}