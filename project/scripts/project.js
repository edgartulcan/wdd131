// ------------------ YEAR & LAST MODIFIED ------------------
const year = document.getElementById("currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

// ------------------ HAMBURGER MENU ------------------
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// ------------------ ARRAY DE SERVICIOS ------------------
const services = [
    {
        name: "Examen Visual Completo",
        description: "Incluye evaluación de agudeza visual, presión ocular y revisión general.",
        imageUrl: "https://www.opeluce.com.pe/blog/wp-content/uploads/2019/05/opeluce-blog-recomendaciones-para-examen-de-la-vista.jpg"
    },
    {
        name: "Adaptación de Lentes de Contacto",
        description: "Evaluación para determinar el tipo adecuado de lente de contacto.",
        imageUrl: "https://conscienciavisual.com/wp-content/uploads/2015/06/lente-de-contacto.jpg"
    },
    {
        name: "Arreglo y Mantenimiento de Lentes",
        description: "Ajuste de monturas, limpieza profesional y mantenimiento general.",
        imageUrl: "https://www.opticavalle.com.co/wp-content/uploads/2023/05/Arreglo-de-gafas-en-cali.jpg"
    },
    {
        name: "Ubicación del Local",
        description: "Encuéntranos fácilmente con el siguiente mapa interactivo.",
        map: true
    }
];

// ------------------ CREACIÓN DE TARJETAS ------------------
function createServiceCards() {
    const container = document.querySelector(".description");
    container.innerHTML = "";

    services.forEach(service => {
        let card = document.createElement("section");

        // Título del servicio
        let title = document.createElement("h2");
        title.textContent = service.name;
        card.appendChild(title);

        // Descripción
        let desc = document.createElement("p");
        desc.textContent = service.description;
        card.appendChild(desc);

        // Si es tarjeta normal con imagen
        if (!service.map) {
            let img = document.createElement("img");
            img.src = service.imageUrl;
            img.alt = service.name;
            img.loading = "lazy";
            card.appendChild(img);
        }

        // Si es tarjeta del MAPA
        if (service.map) {
            let mapFrame = document.createElement("iframe");
            mapFrame.src =
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0432839837918!2d-79.89272362551128!3d-2.1370790371468393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d0060481553%3A0x6c7586269cdca1dc!2sOpticenter%20LS!5e0!3m2!1ses!2sec!4v1764875281362!5m2!1ses!2sec";
            mapFrame.width = "100%";
            mapFrame.height = "300";
            mapFrame.style.border = "0";
            mapFrame.allowFullscreen = true;
            mapFrame.loading = "lazy";
            mapFrame.referrerPolicy = "no-referrer-when-downgrade";
            card.appendChild(mapFrame);
        }

        container.appendChild(card);
    });
}

// Ejecutar función
createServiceCards();

