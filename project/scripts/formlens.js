const year = document.getElementById("currentyear")
let product = document.getElementById("product")

const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

// PRODUCTOS REALES DEL SITIO
// ---------------------------
const products = [
  { id: "rayban", name: "Ray-Ban", averagerating: 4.5 },
  { id: "oakley", name: "Oakley", averagerating: 4.7 },
  { id: "gucci", name: "Gucci", averagerating: 3.5 },
  { id: "vulk", name: "Vulk", averagerating: 3.9 },
  { id: "prada", name: "Prada", averagerating: 5.0 }
];

// ---------------------------
// LLENAR DROPDOWN DEL FORMULARIO
// ---------------------------
if (product !== null) {
  for (const item of products) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    product.appendChild(option);
  }
}

// ---------------------------
// CONTADOR DE REVIEWS
// ---------------------------
let review = document.querySelector(".review");
let thankyou = document.querySelector(".thankyou");

if (review !== null) {
  let num = 1;

  document.addEventListener("DOMContentLoaded", () => {
    const storedCount = localStorage.getItem("formSubmitCount");

    if (storedCount !== null) {
      num += parseInt(storedCount);
      localStorage.setItem("formSubmitCount", num.toString());
    } else {
      localStorage.setItem("formSubmitCount", "1");
    }

    thankyou.innerHTML = `Thank you!  You have submitted ${num} review(s).`;
  });

  // TABLA DE REVIEWS
  for (const item of products) {
    let tr = document.createElement("tr");
    let td0 = document.createElement("td");
    td0.textContent = item.id;
    let td1 = document.createElement("td");
    td1.textContent = item.name;
    let td2 = document.createElement("td");
    td2.textContent = "N/A";

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    review.appendChild(tr);
  }
}