// Є текстове поле на сторінці.
//     Під час фокусування на цьому полі збоку з'являється <div>.' +
// ' При пропажі фокусу - <div> так само пропадає

const div = document.createElement("div");
const img = document.createElement("img");
img.src = "https://cdn.nur.kz/images/720/d4dec9d9eb883c80.webp";
img.alt = "cat";
img.style.width = "100%" ;
div.append(img);
div.classList.add("image");

const text = document.querySelector(".text");

text.onmousemove = () => {
    const flexWrapp = document.querySelector(".flex-wrapp");
    flexWrapp.append(div);
}

text.onmouseleave = () => {
   const flexWrapp = document.querySelector(".flex-wrapp");
   flexWrapp.removeChild(div);
}








