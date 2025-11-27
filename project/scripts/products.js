const year = document.getElementById("currentyear");

// New filters
const allGlasses = document.getElementById("all-glasses");
const usedGlasses = document.getElementById("used-glasses");
const newGlasses = document.getElementById("new-glasses");
const expensiveGlasses = document.getElementById("expensive-glasses");
const cheapGlasses = document.getElementById("cheap-glasses");


const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

// ---------- ARRAY DE LENTES ----------
const glasses = [
  {
    brand: "Ray-Ban",
    material: "Acetato",
    price: 150,
    isNew: true,
    imageUrl: ""
  },
  {
    brand: "Oakley",
    material: "TR90",
    price: 95,
    isNew: false,
    imageUrl: "images/oakley1.jpg"
  },
  {
    brand: "Gucci",
    material: "Acetato Premium",
    price: 260,
    isNew: true,
    imageUrl: "images/gucci1.jpg"
  },
  {
    brand: "Vulk",
    material: "Metal",
    price: 40,
    isNew: false,
    imageUrl: "images/vulk1.jpg"
  },
  {
    brand: "Prada",
    material: "Titanio",
    price: 180,
    isNew: true,
    imageUrl: "images/prada1.jpg"
  }
];

createGlassCard(glasses);

// ---------- FILTROS ACTUALIZADOS ----------
allGlasses.addEventListener("click", () => {
  createGlassCard(glasses);
});

usedGlasses.addEventListener("click", () => {
  createGlassCard(glasses.filter(glass => glass.isNew === false));
});

newGlasses.addEventListener("click", () => {
  createGlassCard(glasses.filter(glass => glass.isNew === true));
});

expensiveGlasses.addEventListener("click", () => {
  createGlassCard(glasses.filter(glass => glass.price > 120));
});

cheapGlasses.addEventListener("click", () => {
  createGlassCard(glasses.filter(glass => glass.price < 50));
});

// ---------- CREAR TARJETAS ----------
function createGlassCard(filteredGlasses) {
  document.querySelector(".temples").innerHTML = '';
  filteredGlasses.forEach(glass => {
    let card = document.createElement("section");
    let brand = document.createElement("h2");
    let material = document.createElement("p");
    let price = document.createElement("p");
    let newTag = document.createElement("p");
    let img = document.createElement("img");

    brand.textContent = glass.brand;
    material.innerHTML = `<span class="label">Material:</span> ${glass.material}`;
    price.innerHTML = `<span class="label">Precio:</span> $${glass.price}`;
    newTag.innerHTML = `<span class="label">Nuevo:</span> ${
      glass.isNew ? "Sí" : "No"
    }`;

    img.setAttribute("src", glass.imageUrl);
    img.setAttribute("alt", `${glass.brand}`);
    img.setAttribute("loading", "lazy");

    card.appendChild(brand);
    card.appendChild(material);
    card.appendChild(price);
    card.appendChild(newTag);
    card.appendChild(img);

    document.querySelector(".temples").appendChild(card);
  });
}