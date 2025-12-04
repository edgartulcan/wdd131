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
    imageUrl: "https://images2.ray-ban.com//cdn-record-files-pi/46a585d2-0b37-410d-b309-ae90017fd47b/e1fca6ed-1224-4dcb-a5ad-ae90017fda37/0RB3016__1367B1__P21__shad__qt.png?impolicy=RB_Product_clone&width=720&bgc=%23f2f2f2"
  },
  {
    brand: "Oakley",
    material: "TR90",
    price: 95,
    isNew: false,
    imageUrl: "https://assets2.oakley.com/cdn-record-files-pi/2dada0dc-d98e-47be-9525-b2dc011235c2/cabf5406-a69f-45e9-a561-b2dc01123d95/0OW8002__800202__P21__shad__al31.png?impolicy=OO_ratio&width=3000"
  },
  {
    brand: "Gucci",
    material: "Acetato Premium",
    price: 260,
    isNew: true,
    imageUrl: "https://lux.mx/cdn/shop/articles/Lentes_Gucci_Cuadrados.webp?v=1692896065"
  },
  {
    brand: "Vulk",
    material: "Metal",
    price: 40,
    isNew: false,
    imageUrl: "https://do2padres.com/cdn/shop/files/MBLK--R-BLUE---PERFIL_800x.jpg?v=1688988231"
  },
  {
    brand: "Prada",
    material: "Titanio",
    price: 180,
    isNew: true,
    imageUrl: "https://image4.cdnsbg.com/1/13/554159_side_2_1639635327485.jpg?width=900&height=450&q=90"
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

// ---------- TARJETAS CREADAS PARA DIFERENCIAR MAS FACIL ----------
function createGlassCard(filteredGlasses) {
  document.querySelector(".product").innerHTML = '';
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

    document.querySelector(".product").appendChild(card);
  });
}