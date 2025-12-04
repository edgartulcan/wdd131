const year = document.getElementById("currentyear");

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
const costumeservice = [
  {
    service: "Ray-Ban",
    sumdescription: "Acetato",
    imageUrl: "https://images2.ray-ban.com//cdn-record-files-pi/46a585d2-0b37-410d-b309-ae90017fd47b/e1fca6ed-1224-4dcb-a5ad-ae90017fda37/0RB3016__1367B1__P21__shad__qt.png?impolicy=RB_Product_clone&width=720&bgc=%23f2f2f2"
  },
  {
    service: "Oakley",
    sumdescription: "TR90",
    imageUrl: "https://assets2.oakley.com/cdn-record-files-pi/2dada0dc-d98e-47be-9525-b2dc011235c2/cabf5406-a69f-45e9-a561-b2dc01123d95/0OW8002__800202__P21__shad__al31.png?impolicy=OO_ratio&width=3000"
  },
  {
    service: "Gucci",
    sumdescription: "Acetato Premium",
    imageUrl: "https://lux.mx/cdn/shop/articles/Lentes_Gucci_Cuadrados.webp?v=1692896065"
  },
  {
    service: "Vulk",
    sumdescription: "Metal",
    imageUrl: "https://do2padres.com/cdn/shop/files/MBLK--R-BLUE---PERFIL_800x.jpg?v=1688988231"
  },
  {
    service: "Prada",
    sumdescription: "Titanio",
    imageUrl: "https://image4.cdnsbg.com/1/13/554159_side_2_1639635327485.jpg?width=900&height=450&q=90"
  }
];

createGlassCard(glasses);

// ---------- FILTROS ACTUALIZADOS ----------


// ---------- TARJETAS CREADAS PARA DIFERENCIAR MAS FACIL ----------
function createGlassCard(filteredGlasses) {
  document.querySelector(".description").innerHTML = '';
  filteredGlasses.forEach(glass => {
    let card = document.createElement("section");
    let service = document.createElement("h2");
    let sumdescription = document.createElement("p");
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